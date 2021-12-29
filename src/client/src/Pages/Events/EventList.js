import React, { useEffect } from "react";
import { useState } from "react";
import "./EventList.css";
import Event from "../../components/Event";
import AddEvent from "./AddEvent";
import axios from "axios";

function EventList() {
  const [eventList, setEventList] = useState([]);
  const [eventDetails, toggleEventDetails] = useState(false);

  const addEvent = () => {
    toggleEventDetails(!eventDetails);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/events/")
    .then((response) => {
        setEventList(response.data);
    })
    .catch(function(error){
        console.log(error);
    });
  }, []);

  const deleteEvent = async (e) => {
    console.log(e);
    axios.delete(`http://localhost:5000/events/${e._id}`);
    setEventList(eventList.filter(event => event != e));
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
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Time</th>
            <th>Delete?</th>
          </tr>
        </thead>
        {eventList.map((event) => (
          <tr>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td><button onClick={()=>deleteEvent(event)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default EventList;