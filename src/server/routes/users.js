const express = require('express');
const userRoutes = express.Router();
const db = require('../db/dao');
const {ObjectId} = require('mongodb');
const { addBasicUser, getUser } = require('../db/dao');

userRoutes.route("/users/login/").post(async function(req, res) {
    console.log("Logging in..");
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