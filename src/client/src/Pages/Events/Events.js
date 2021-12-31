import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import EventList from "./EventList";
import NavBar from "../../components/navbar/NavBar";
import { getEvents, addEvent } from "./events-api-calls/calls";

function Events() {
  // Get current user's events
  const [eventList, setUserEvents] = useState(null);
  const [eventToAdd, setEventToAdd] = useState("");
  const [loading, setLoading] = useState(false)
  const [showAddEvent, toggleAddEvent] = useState(false);
  
  useEffect(async () => {
    setLoading(true)
    const response = await fetch("/allEvents");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.error);
    }
    console.log(body)
    setUserEvents(body.events)
    setLoading(false)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate and sanitize this data before pushing to db


    toggleAddEvent(false);
  };

  return (
    <div class="event-list">
      <NavBar />
      <header>
        <h1>Upcoming Events</h1>
      </header>
      <div class="toolbar">
        <button
          class="add-event"
          onClick={() => toggleAddEvent(!showAddEvent)}
          disabled={showAddEvent ? "disabled" : ""}
        >
          Add Event
        </button>
      </div>
      {showAddEvent && (
        <div className="addevent-container">
          <div>Enter event details</div>
          <form class="addevent-form" onSubmit={handleSubmit}>
            <label>Event Title</label>
            <input
              type="text"
              name="eventname"
              placeholder="Give your an event a name!"
              required
            ></input>
            <label>Time</label>
            <input
              type="text"
              name="time"
              placeholder="What time is your event?"
              required
            ></input>
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="What time is your event?"
              required
            ></input>
            <div class="form__description">
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Add any additional notes"
                required
              ></input>
            </div>
            <button>Add Your Event</button>
          </form>
        </div>
      )}
      <div class="upcoming-events">
        <EventList events={eventList} />
      </div>
    </div>
  );
}

export default Events;
