import logo from "./logo.svg";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import { Router, Link } from "react-router-dom";
import Home from "./Pages/Home";

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export default function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavBar />
        <Home />
      </nav>
    </div>
  );
}
