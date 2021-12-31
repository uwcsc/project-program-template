import React from "react";
import "./EventList.css";
import Event from "./Event";

function EventList({events}) {
  if(!events){
    return <></>
  }

  events = events.reverse()
  return events.map((event) => {
    return (
      <div>
        <Event event={event} />
      </div>
    );
  });
}

export default EventList;
