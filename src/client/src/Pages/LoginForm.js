import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import EventList from "./Events/EventList";
import {useNavigate} from 'react-router-dom';

const admin = {
  email: "admin@admin.com",
  username: "Admin",
  password: "admin",
};

function LoginForm({ currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const login_user = {
      username: username,
      password: password,
      email: email,
    };
    axios.post("http://localhost:5000/users/login/", login_user)
    .then(res => {
      localStorage.setItem("user", res.data.username);
      navigate("/home");
    });
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="inner-form">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              placeholder="enter a username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;