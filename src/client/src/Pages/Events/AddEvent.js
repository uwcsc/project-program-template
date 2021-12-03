import React from "react";
import { useState } from "react";
//import AdapterDateFns from '@mui/lab/AdapterDateFns';
//import LocalizationProvider from '@mui/lab/LocalizationProvider';
//import { TimePicker } from "@mui/lab";

function AddEvent() {
  const eventList = [];

  const [eventName,setEventName] = useState("");
  const [time, setTime] = useState();
  const [details, setDetails] = useState("");

  const handleSubmit = (target) => {
    eventList.push({
      eventName: target.eventName,
      time: target.time,
      details: target.details,
    });
  };

  return (
    <div>
      <ul>
        {eventList.map}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="inner-form">
          <div>Enter event details</div>
          <div className="form-group">
            <label htmlFor="event-name">Event: </label>
            <input
              type="text"
              value={eventName}
              placeholder="Give your an event a name!"
              onChange={({ target }) => setEventName(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time: </label>
            <input
              type="text"
              value={time}
              placeholder="What time is your event?"
              onChange={({ target }) => setTime(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Details">Details: </label>
            <input
              type="text"
              value={details}
              placeholder="Details"
              onChange={({ target }) => setDetails(target.value)}
            />
          </div>
          <input type="submit" value="add-event" />
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
