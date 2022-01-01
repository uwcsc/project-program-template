import React, { Component } from "react";
import { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import './Events.css'

function MyEvents() {
  const [myEvents, setMyEvents] = useState(null)

  useEffect(async () => {
    const response = await fetch('/myevents')
    const body = await response.json()
    if (response.status !== 200) {
      throw Error(body.error);
    }
    setMyEvents(body.events);
  })

  return (
    <div>
      <NavBar />
      <div class="event-list">
        {myEvents}
      </div>
    </div>
  );
}

export default MyEvents;
