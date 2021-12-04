import React from 'react';

function Event(props) {
  return (
    <div className="event-container">
      <header>{props.eventName}</header>
      <div className="description">{props.description}</div>
      <div className="details">
        <div className="time">{props.time}</div>
        <div className="location">{props.location}</div>
      </div>
    </div>
  )
}

export default Event
