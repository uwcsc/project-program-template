import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import EventList from "./Pages/Events/EventList";
import { Router, Link } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <Router exact path="/" component={Home} />
      <Router exact path="/login" component={Login} />
      <Router exact path="/profile" component={Profile} />
      <Router exact path="/eventlist" component={EventList} />
    </div>
  );
}