import { Db, MongoClient } from "mongodb";
const dbUrl = process.env.ATLAS_URI;
const client = new MongoClient(dbUrl);
let workingDb;

export const connectToServer = async () => {
	const db = await client.connect();

	return new Promise((resolve, reject) => {
		if (db) {
			console.log("Successfully connected to db!");
			workingDb = db.db("night-night");

			resolve(workingDb);
		} else {
			reject()
		}
	})	
};

export const getDb = async (): Promise<Db> => {
	return new Promise((resolve, reject) => {
		if (workingDb) {
			resolve(workingDb);
		} else {
			reject();
		}
	});
};