const express = require("express");
const eventRoutes = express.Router();
const db = require("../db/dao");
const {ObjectId} = require('mongodb');

eventRoutes.route("/events/").get(async function(req, res) {
    console.log("Hello there");
    await db.conn.connectToDatabase();
    const events = await db.events.findMatchingEvents("");
    res.json(events);
});

//Do we need this?
eventRoutes.route("/events/:id").get(async function(req, res) {
    await db.conn.connectToDatabase();
    const event = await db.events.getEvent(ObjectId(req.params.id));
    res.json(event);
    
});

eventRoutes.route("/events/add").post(async function(req, res) {
    await db.conn.connectToDatabase();
    // req.body.participants = req.body.participants.split(',')
    db.events.addBasicEvent(req.body.name, req.body.date, true);
});

eventRoutes.route("/events/:id").delete(async function(req, res) {
    console.log(`proceed to delete ${req.params.id} on server`);
    await db.conn.connectToDatabase();
    const result = await db.events.deleteEvent(ObjectId(req.params.id));
    console.log(result);
    if(result) {
        return "Event was successfully deleted.";
    } else {
        return "Event does not exist.";
    }
})


//Fix this
// eventRoutes.route("/events/:id").patch(async function (req, res) {
//   console.log(`updating ${req.params.id} on server with new participant`)
//   const result = await db.events.updateEvent(ObjectId(req.params.id), 'participants', req.body.newValue)
//   console.log(result)
//   if(result) {
//      res.send(req.body.user + " has joined the event" )
//   } else {
//     res.status(404).send("Event does not exist")
//   }
// })



// eventRoutes.route("/events/:userid").get(async function(req, res) {
//   await db.connectToServer()
//   const userEvenst = db.findMatchingEvents()
// })

// eventRoutes.route("/event/:id/update").patch(async function(req, res) {
//   await db.connectToServer()
//   const event = await db.getEvent(ObjectId(req.params._id))
// })

module.exports = eventRoutes;