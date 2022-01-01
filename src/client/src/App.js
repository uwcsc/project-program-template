import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    currentUser: {
      username: "",
      email: "",
      password: "",
    }
  };

  componentDidMount() {
    this.getCurrentUser()
      .then((res) => {
        this.setState({ currentUser: res.currentUser });
      })
      .catch((err) => console.log(err));
  }

  // fetching the GET route from the Express server which matches the GET route from server.js
  getCurrentUser = async () => {
    const response = await fetch("/currentUser");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.error);
    }
    return body;
  };

  login = async () => {
    const response = await fetch('/users/login/')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.error)
    }
    return body
  }

  render() {
    const { navigate } = this.props;

    const handleSubmit = (e) => {
      e.preventDefault();

      //authenticate this user to see if we should log them in
      const currentUser = this.login()
        .then((res) => {
          this.setState({ currentUser: res.currentUser });
        })
        .catch((err) => console.log(err));

      if (
        e.target.elements.username.value.trim() !== this.state.currentUser.username ||
        e.target.elements.password.value.trim() !== this.state.currentUser.password
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
                type="password"
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
}

export default function (props) {
  const navigate = useNavigate();

  return <App navigate={navigate} />;
}

const admin = {
  username: "Admin",
  email: "imjacob933@gmail.com",
  password: "admin",
};
