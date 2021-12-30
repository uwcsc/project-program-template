import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./App.css";

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export default function App() {
  const navigate = useNavigate();

  const admin = {
    username: "Admin",
    email: "imjacob933@gmail.com",
    password: "admin",
  };

  const handleSubmit = (e) => {
    e.preventDefault()
 
    //access database and see if user and password exist and match
    if (
      e.target.elements.username.value !== admin.username ||
      e.target.elements.password.value !== admin.password
    ) {
      return alert("Invalid username or password");
    }

    navigate("/home");
  };

  return (
    <div class="container">
      <div class="centered-form">
        <div class="centered-form__box">
          <h1>
            Welcome to
            <br />
            <span>Good Night Out</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            ></input>
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              required
            ></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
