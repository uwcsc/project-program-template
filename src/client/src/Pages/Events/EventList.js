import React from "react";
import "./css/EventList.css";
import Event from "./Event";

function EventList({events}) {
  if(!events){
    return <div>Currently, there are no events.  Create One!</div>
  }

  const publicEvents = events.filter((event) => event.is_public)
  console.log(publicEvents.reverse())

  return publicEvents.reverse().map((event) => {
    return (
      <div>
        <Event event={event} />
      </div>
    );
  });
}

export default EventList;
