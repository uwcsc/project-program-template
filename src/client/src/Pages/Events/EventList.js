import React from "react";
import { useState } from "react";
import "./EventList.css";
import Event from "../../components/Event";
import AddEvent from "./AddEvent";
import Home from "../Home";
import { render } from "react-dom";
import { Link } from "react-router-dom";

function EventList() {
  const [eventList, addToEventList] = useState([]);
  const [eventDetails, toggleEventDetails] = useState(false);

  const addEvent = () => {
    toggleEventDetails(!eventDetails);
  };

  // when they submit event details, send to database, and then when I render it looks for the name in database

  return (
    <div className="event-list">
      <h1>Upcoming Events</h1>
      <div className="buttons">
        <button className="add-event" onClick={addEvent}>
          Add Event
        </button>
        {eventDetails ? <AddEvent /> : <></>}
      </div>
      <ul>
        {eventList.map((event) => (
          <li>{event}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
