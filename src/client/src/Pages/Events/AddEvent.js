import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import { TimePicker } from "@mui/lab";

const eventList = [{ 
  eventName: "Study Session",
  time: "12:30",
  location: "MC 1080",
  desc: "Come study Math "
}, {
  eventName: "Basketball Game",
  time: "4:30",
  location: "PAC",
  desc: "Intramural basketball game"
}];

export const getEvents = () => {
  return eventList;
};

function AddEvent() {
  const navigate = useNavigate();

  const 

  const handleSubmit = (e) => {
    e.preventDefault()
    eventList.push({
      eventName: e.target.elements.eventname,
      time: e.target.elements.time,
      location: e.target.elements.location,
      desc: e.target.elements.description,
    });
    navigate("/eventlist");
  };

  return (
    <div className="addevent-container">
      <div>Enter event details</div>
      <form onSubmit={handleSubmit}>
        <label>Event Title</label>
        <input
          type="text"
          name="eventname"
          placeholder="Give your an event a name!"
          required
        ></input>
        <label>Time</label>
        <input
          type="text"
          name="time"
          placeholder="What time is your event?"
          required
        ></input>
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="What time is your event?"
          required
        ></input>
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Add any additional notes"
          required
        ></input>
        <button>Add Your Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
