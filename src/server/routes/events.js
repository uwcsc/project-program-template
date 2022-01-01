const express = require("express");
const eventRoutes = express.Router();
const db = require("../db/dao");
const {ObjectId} = require('mongodb');

eventRoutes.route("/events/").get(async function(req, res) {
    console.log("Hello there");
    await db.connectToServer();
    const events = await db.findMatchingEvents("");
    res.json(events);
});

eventRoutes.route("/events/:id").get(async function(req, res) {
    await db.connectToServer();
    const event = await db.getEvent(ObjectId(req.params.id));
    res.json(event);
    
});

eventRoutes.route("/events/add").post(async function(req, res) {
    await db.connectToServer();
    req.body.participants = req.body.participants.split(',').map((participant) => {
      return participant.trim()
    })
    db.addBasicEvent(req.body.name, req.body.date, req.body.participants, true);
});

eventRoutes.route("/events/:id").delete(async function(req, res) {
    console.log(`proceed to delete ${req.params.id} on server`);
    await db.connectToServer();
    const result = await db.deleteEvent(ObjectId(req.params.id));
    console.log(result);
    if(result) {
        return "Event was successfully deleted.";
    } else {
        return "Event does not exist.";
    }
})

eventRoutes.route("/event/:id/update").get(async function(req, res) {
    await db.connectToServer();
})

module.exports = eventRoutes;