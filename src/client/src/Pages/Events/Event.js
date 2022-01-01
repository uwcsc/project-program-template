import React from "react";
import "./css/Event.css";

function Event({event}) {
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
          {event.participants === [] &&
          <div className="participants">
            Participants:
            {event.participants.map((participant) => {
              return <span>{participant}</span>;
            })}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Event;
