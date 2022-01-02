const mongoose = require("mongoose");

const dbUri = process.env.ATLAS_URI;
let workingDb;

/**
 * Initializes the connection to the database.
 *
 * ! THIS COMMAND MUST BE RUN AS SOON AS POSSIBLE!
 *
 * Note: make sure that the proper `ATLAS_URI` is set in environment variables,
 * or the connection process will fail.
 *
 * @returns a promise that will resolve to the db object.
 */
const connectToDatabase = async () => {
	try {
		const db = await mongoose.connect(dbUri);

		return new Promise((resolve, reject) => {
			if (db) {
				console.log("Successfully connected to db!");
				workingDb = db;

				resolve(workingDb);
			} else {
				reject();
			}
		});
	} catch (err) {
		console.error(err);
	}
};

/**
 * Attempts to retrieve the current working db.
 *
 * Note: {@link connectToDatabase} should be run first.
 *
 * @returns a promise with the current working db, if initialized.
 */
const getDb = async () => {
	return new Promise((resolve, reject) => {
		if (workingDb) {
			resolve(workingDb);
		} else {
			reject();
		}
	});
};

exports.connectToDatabase = connectToDatabase;
exports.getDb = getDb;
