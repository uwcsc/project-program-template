import React from "react";
import "./css/Event.css";
import api from './events-api-calls/calls.js'
import {FaTrash} from 'react-icons/fa'

function Event({event}) {
  console.log(event)
  return (
    <div className="event-container">
      <div className="event-container__box">
        <div className="info">
          <h3>{event.name}</h3>
          <div className="details">
            <div className="time">
              <span>Date: </span>
              {event.date}
            </div>
            {event.location && <div className="location">
              <span>Location: </span>
              {event.location}
            </div>}
          </div>
        </div>
        <div className="event-info">
          <div className="description">
            Notes: <span>{event.desc}</span>
          </div>
          {event.participants !== [] &&
          <div className="participants">
            Participants: 
            {event.participants.map((participant) => {
              console.log(participant)
              return <span>{participant.username},</span>;
            })}
          </div>}
        </div>
      </div>
      <div class="join-delete-buttons">
        <button className="join-event" onClick={() => api.joinEvent({eventid: event._id, user: testUser})}>
          Join
        </button>
      <button class="delete-button" onClick={() => api.deleteEvent(event._id)}>
        <FaTrash />
      </button>
      </div>
    </div>
  );
}

const testUser = {
  firstname: "Jacob",
  lastname: "I",
  username: "jacobi3",
  email: "jim@wat.com"
}

export default Event;
