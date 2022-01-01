const express = require('express');
const userRoutes = express.Router();
const db = require('../db/dao');
const {ObjectId} = require('mongodb');
const { addBasicUser, getUser } = require('../db/dao');
const userSchema = require('../db/dao-modules/userdao.ts')

// userRoutes.route("/users/signup").post(async function (req,res) {
//   console.log("signing up")
//   await db.connectToServer()
//   const formattedUsername = req.body.username.padEnd(12,'.').substring(0,12)
  
//   // Can you set this up 
//   // const newUser = new userSchema(req.body)
  

//   // const token = await userRoutes.generateAuthToken
//   const newBasicUser = {
//     firstname: "Jacob",
//     lastname: "Im",
//     username: "jomboy",
//     email: "jacob@test.ca" 
//   }

//   await newUser.addBasicUser()
//   res.status(201).send({newBasicUser})
// }) 
 
userRoutes.route("/users/login/").post(async function(req, res) { 
    console.log("Logging in..");
    console.log(req.body.username)
    await db.connectToServer();
    const formattedUsername = req.body.username.padEnd(12, '.').substring(0, 12);
    let db_user = await db.getUser(formattedUsername);
    if(db_user == null) {
        await db.addBasicUser(req.body.username, req.body.password, formattedUsername, req.body.email);
        db_user = await db.getUser(formattedUsername);
    }
    console.log(db_user);
    res.json(db_user);
});

userRoutes.route("/users/:name/").get(async function(req, res) {
    await db.connectToServer();
    return await getUser(req.params.name);
});

module.exports = userRoutes;