import React from "react";
import "./index.css";
import App from "./App";
import LoginForm from "./Pages/LoginForm";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile/Profile";
import EventList from "./Pages/Events/EventList";
import ErrorBoundary from "./components/ErrorBoundary";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render (
  <div >
    <BrowserRouter>
    <ErrorBoundary >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="loginform" element={<LoginForm />} />
        <Route path="profile" element={<Profile />} />
        <Route path="eventlist" element={<EventList />} />
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
