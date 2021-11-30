import { MongoClient } from "mongodb";

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);
let workingDb;

export const connectToServer = async () => {
	const db = await client.connect();

	if (db) {
		console.log("Successfully connected to db!");
		workingDb = db.db("night-night");
	} else {
		throw db; // I think this should be right? Check later...
	}
};

export const getDb = async () => {
	return new Promise((resolve, reject) => {
		if (workingDb) {
			resolve(workingDb);
		} else {
			reject();
		}
	});
};
