import { useState } from "react";
import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import NavBar from "./components/NavBar";
import { Button } from "react";

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


export default function App() {
  const admin = {
    email: "admin@admin.com",
    username: "Admin",
    password: "admin",
  };
  //connect this to database

  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState("");
  const [loggedIn, toggleLogIn] = useState(false);

  const LoginFunc = (userInfo) => {
    console.log(userInfo);

    if (
      userInfo.username == admin.username &&
      userInfo.password == admin.password
    ) {
      console.log("Hello, " + userInfo.username);
      setUser({
        username: userInfo.username,
        email: userInfo.email,
      })
      toggleLogIn(!loggedIn);
    } else {
      console.log("Your username and password do not match.");
      setError("Please enter all your details correctly.");
    }
  };

  const Logout = () => {
    setUser({ username: "", email: "" });
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h1>
            Welcome, <span>{user.username}</span>
          </h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm LoginFunc={LoginFunc} error={error} />
      )}
    </div>
  );
}
