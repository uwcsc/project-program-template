import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import NavBar from "./components/NavBar";
import axios from "axios";

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


export default function App() {
  return (
    <div className="container">
       <h1>Welcome</h1>
       <h2>Login to Good Night Out</h2>
    </div>
  )
}