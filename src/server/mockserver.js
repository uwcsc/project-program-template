const express = require("express");
const cors = require("cors");
const { application } = require("express");
require("dotenv").config();

const dao = require("./db/dao");

const port = process.env.SERVER_PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, async () => {
	console.log(`Server is now running on port ${port}`);

	await dao.connectToServer();
});
