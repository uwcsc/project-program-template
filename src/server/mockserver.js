const express = require("express");
const cors = require("cors");
const { application } = require("express");
require("dotenv").config();

const dao = require("./db/dao");
const { dummyEvent } = require("./db/schema");
const { ObjectId } = require("bson");

const port = process.env.SERVER_PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, async () => {
	console.log(`Server is now running on port ${port}`);

	await dao.connectToServer();
	// let aaa = new ObjectId();
	// let bbb = aaa.valueOf();
	// let ccc = new ObjectId(bbb);
	// console.log(aaa)
	// console.log(ccc)
	// console.log(aaa.equals(ccc));

	// let cool = await dao.getEvent(new ObjectId("61a968cdf4168796656e721e"));
	// console.log(cool)

	console.log(await dao.addEvent(dummyEvent));
});
