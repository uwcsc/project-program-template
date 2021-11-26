const express = require("express");
const eventRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

eventRoutes.route("/events/").get(function(req, res) {
    let db_connect = dbo.getDb();
    db_connect.collection("events").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
      });
});

eventRoutes.route("/events/:id").get(function(req, res) {
    let db_connect = dbo.getDb();
    let query = {_id: ObjectId(req.params.id)};
    db_connect
    .collection("events")
    .findOne(query, function(err, result) {
        if(err) throw err;
        res.json(result);
    });
});

eventRoutes.route("/events/add").post(function(req, res) {
    let db_connect = dbo.getDb();
    let event = {
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
    };
    db_connect.collection("events").insertOne(event, function(err, result) {
        if(err) throw err;
        res.json(result);
    })
})

eventRoutes.route("/events/update/:id").post(function(req, response) {
    let db_connect = dbo.getDb();
    let query = {_id: ObjectId(req.params.id)};
    let newevent = {
        $set: {
            name: req.body.name,
            date: req.body.date,
            location: req.body.location,
            attendees: req.body.attendees,
            maxsize: req.body.maxsize,
        },
    };
})

eventRoutes.route("/events/:id").delete((req, res) => {
    let db_connect = dbo.getDb();
    let query = {_id: ObjectId(req.params.id)};
    db_connect.collection("events").deleteOne(query, function(err, obj) {
        if(err) throw err;
        console.log("1 event deleted");
        res.status(obj);
    })
});

module.exports = eventRoutes;