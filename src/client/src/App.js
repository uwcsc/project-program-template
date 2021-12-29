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

  const [user, setUser] = useState({username: "", password: "", email: ""});

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(foundUser);
    }
  }, []);
  
  const Logout = () => {
    setUser({ username: "", email: "" });
  };

  return (
    <div className="App">
      {user.username != "" ? (
        <div className="welcome">
          <h1>
            Welcome, <span>{user.username}</span>
          </h1>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}