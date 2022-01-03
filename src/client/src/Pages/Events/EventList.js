import React from "react";
import "./css/EventList.css";
import Event from "./Event";

function EventList({events}) {
  if(!events){
    return <div>Currently, there are no events.  Create One!</div>
  }

  let allevents = events.filter((event) => event.is_public)
  allevents = allevents.sort((event1, event2) => {
    if(event1.date > event2.date){
      return 1
    } else {return -1}
  })
  return allevents.map((event) => {
    return (
      <div>
        <Event event={event} />
      </div>
    );
  });
}

export default EventList;
