import React from "react";
import "./index.css";
import App from "./App";
import LoginForm from "./Pages/LoginForm";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import EventList from "./Pages/Events/EventList";
import NavBar from "./components/NavBar";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render (
  <div >
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="profile" element={<Profile />} />
        <Route path="eventlist" element={<EventList />} />
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
