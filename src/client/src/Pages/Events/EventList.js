import React from "react";
import { useState } from "react";
import "./EventList.css";
import Event from "../../components/Event";
import Home from "../Home";
import { render } from "react-dom";

function EventList(){

  const [eventList, addEvent] = useState([])

  const addEvent = () => {
    render(<AddEvent />);
  }



  return(
    <div className="event-list">
      <h1>Upcoming Events</h1>
      <div className="buttons">
        <button className="addd-event" onClick={addEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default EventList;