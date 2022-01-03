const express = require('express');
const userRoutes = express.Router();
const db = require('../db/dao');
const {ObjectId} = require('mongodb');
const { addBasicUser, getUser } = require('../db/dao');

userRoutes.route("/users/login/").post(async function(req, res) {
  console.log("Logging in..");
  await db.conn.connectToDatabase();
  console.log(req.body)
  const formattedUsername = req.body.username.padEnd(12, '.').substring(0, 12);
  let db_user = await db.users.getUser(formattedUsername);
  if(db_user == null) {
      await db.users.addBasicUser(req.body.firstname, req.body.lastname, formattedUsername, req.body.email);
      db_user = await db.users.getUser(formattedUsername);
      console.log(db_user)
  }
  res.json(db_user);
});

userRoutes.route("/users/:name/").get(async function(req, res) {
  await db.conn.connectToDatabase();
  const user = await db.users.getUser(req.params.name)
  res.json(user)
});

userRoutes.route("/users/signup").post(async function (req,res) {
  console.log("signing up")
  await db.conn.connectToDatabase()
  const formattedUsername = req.body.username.padEnd(12,'.').substring(0,12)
})
//   // Can you set this up 
//   // const newUser = new userSchema(req.body)

//delete users from database

module.exports = userRoutes;