import {MongoClient} from "mongodb";

const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);
let workingDb;

export const connectToServer = (callback) => {
  client.connect((err, db) => {
    if (db) {
      workingDb = db;
      console.log("Successfully connected to db!");
    }

    return callback(err);
  })
}

export const getDb = () => {
  return workingDb
}