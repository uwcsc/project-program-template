const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/events"));

const dbo = require("./db/conn");

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if(err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.json(), urlencodedParser)

mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => {
    app.listen(process.env.PORT, () => console.log("Server is live"))
}).catch(err => console.log(err));

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./models/user");

app.post("/register", async (req, res) => {
    const user = req.body;
    const takenUsername = await User.findOne({username: user.username});
    const takenEmail = await User.findOne({email: user.email});
    if(takenUsername || takenEmail) {
        res.json({message: "Username or email has already been taken"});
    } else {
        user.password = await bcrypt.hash(req.body.password, 10);
        console.log(user.username+" "+user.email);
        const dbUser = new User({
            username: user.username.toLowerCase(),
            password: user.password,
            email: user.email.toLowerCase(),
        })

        dbUser.save();
        res.json({message: "Success"});
    }
})

app.post("/login", async (req, res) => {
    const userLoggingIn = req.body;
    User.findOne({username: userLoggingIn.username})
    .then(dbUser => {
        if(!dbUser) {
            return res.json({message: "Invalid Username or Password"})
        }
        bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then(isCorrect => {
            if(isCorrect) {
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username,
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        if(err) return res.json({message: err})
                        console.log(token);
                        return res.json({
                            message: "Success",
                            token: "Bearer "+token
                        })
                    }
                )
            } else {
                return res.json({
                    message: "Invalid Username or Password"
                })
            }
        })
    })
})

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"]?.split(' ')[1]
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed To Authenticate"
            })
            req.user = {};
            req.user.id = decoded.id
            req.user.username = decoded.username
            next();
        })
    } else {
        res.json({message: "Incorrect Token Given", isLoggedIn: false})
    }
}

app.get("/getUsername", verifyJWT, (req, res) => {
    res.json({isLoggedIn: true, username: req.user.username});
})