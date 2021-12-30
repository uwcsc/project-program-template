import React from 'react'
import { useState } from 'react';
import "./Events.css";
import EventList from './EventList'
import NavBar from "../../components/navbar/NavBar";
import AddEvent from './AddEvent';

function EventPage() {
  const [addEvent, toggleAddEvent] = useState(false);

  // when they submit event details, send to database, and then when I render it looks for the name in database

  return (
    <div class="event-list">
      <NavBar />
      <header>
        <h1>Upcoming Events</h1>
      </header>
      <div class="toolbar">
        <button class="add-event" onClick={() => toggleAddEvent(!addEvent)} disabled={addEvent ? "disabled" : ""}>
          Add Event
        </button>
      </div>
      {addEvent ? <AddEvent /> : <div>Add an Event!</div>}
      <div class="upcoming-events">
        <EventList />
      </div>
    </div>
  )
}

export default EventPage
