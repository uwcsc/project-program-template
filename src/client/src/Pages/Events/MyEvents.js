import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Event from "./Event.js";
import "../css/Events.css";

function MyEvents() {
  const [myEvents, setMyEvents] = useState(null);

  useEffect(async () => {
    const response = await fetch("/users/:id/events/");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.error);
    }
    setMyEvents(body.events);
  });

  return (
    <div class="event-list">
      <NavBar />
      <header>
        <h1>My Events</h1>
      </header>
      <div class="upcoming-events">
        {myEvents ? (
          <div>
            {myEvents.map((event) => {
              return <Event event={event} />;
            })}
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
            You have not joined any events. Go to the{" "}
            <Link to="/eventlist">Event List</Link> tab to join or create public
            events
          </div>
        )}
      </div>
    </div>
  );
}

export default MyEvents;
