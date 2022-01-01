import mongoose from "mongoose";

const dbUri = process.env.ATLAS_URI;
const client = new MongoClient(dbUri);
let workingDb;

export const connectToServer = async () => {
  const db = await mongoose.connect(dbUri);

  return new Promise((res, rej) => {
    if (db) {
			console.log("Successfully connected to db!");
      workingDb = db;

			res(workingDb);
		} else {
			rej();
		}
	});
};

export const getDb = async () => {
	return new Promise((res, rej) => {
		if (workingDb) {
			res(workingDb);
		} else {
			rej();
		}
	});
};
