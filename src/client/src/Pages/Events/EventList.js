import React from "react";
import "./EventList.css";
import Event from "./Event";

function EventList({ events }) {
  return events.map((event) => {
    return (
      <div>
        <Event event={event} />
      </div>
    );
  });
}

export default EventList;
