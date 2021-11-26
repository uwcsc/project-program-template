"use strict";
exports.__esModule = true;
exports.getDb = exports.connectToServer = void 0;
var mongodb_1 = require("mongodb");
var Db = process.env.ATLAS_URI;
var client = new mongodb_1.MongoClient(Db);
var workingDb;
var connectToServer = function (callback) {
    client.connect(function (err, db) {
        if (db) {
            workingDb = db;
            console.log("Successfully connected to db!");
        }
        return callback(err);
    });
};
exports.connectToServer = connectToServer;
var getDb = function () {
    return workingDb;
};
exports.getDb = getDb;
