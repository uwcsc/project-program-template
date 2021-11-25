const express = require("express");
const cors = require("cors");
const { application } = require("express");
require("dotenv").config();

const port = process.env.SERVER_PORT;
const app = express();
app.use(cors());
app.use(express.json());

const dbo = require("./db/conn");

app.listen(port, () => {
	console.log(`Server is now running on port ${port}`);
});
