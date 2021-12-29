import axios from "axios";
import React from "react";
import { useState } from "react";

function AddEvent() {
  const [eventName,setEventName] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      const newEvent = {
          name: eventName,
          date: time,
          details: details,
      }
      axios.post("http://localhost:5000/events/add", newEvent);
  }

  return (
    <div>
      <ul>
        {/*{eventList.map}*/}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="inner-form">
          <div>Enter event details</div>
          <div className="form-group">
            <label htmlFor="event-name">Event: </label>
            <input
              type="text"
              placeholder="Give your an event a name!"
              onChange={({ target }) => setEventName(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time: </label>
            <input
              type="text"
              placeholder="What time is your event?"
              onChange={({ target }) => setTime(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Details">Details: </label>
            <input
              type="text"
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