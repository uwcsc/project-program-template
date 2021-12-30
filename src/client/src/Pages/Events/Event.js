import React from "react";
import "./Event.css";

function Event({ event }) {
  return (
    <div className="event-container">
      <div className="event-container__box">
        <div className="info">
          <h3>{event.eventName}</h3>
          <div className="details">
            <div className="time">
              <span>Time: </span>
              {event.time}
            </div>
            <div className="location">
              <span>Location: </span>
              {event.location}
            </div>
          </div>
        </div>
        <div className="description">
          <span>Notes: </span>
          {event.desc}
        </div>
      </div>
    </div>
  );
}

export default Event;
