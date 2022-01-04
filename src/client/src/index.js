import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Events from "./Pages/Events/Events";
import MyEvents from "./Pages/Events/MyEvents";
import ErrorBoundary from "./components/ErrorBoundary";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render (
  <div >
    <BrowserRouter>
    <ErrorBoundary >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="eventlist" element={<Events />} />
        <Route path="myevents" element={<MyEvents />}/>
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
