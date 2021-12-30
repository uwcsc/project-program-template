import React from "react";
import {getEvents} from './AddEvent'
import "./EventList.css";
import Event from './Event'

function EventList() {
  const events = getEvents();

  const getEventList = () => {
    events.map((event) => {
      <Event event={event}/>
    })
  }

  return events.map((event) => {
      return (<div>
        <Event event={event}/>
      </div>)
    })
  ;
}

export default EventList;
