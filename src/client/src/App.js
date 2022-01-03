import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    currentUser: {
      firstname: "",
      lastname: "",
      username: "",
      email: ""
    },
  };
  // fetching the GET route from the Express server which matches the GET route from server.js
  componentDidMount() {
    this.state.currentUser = admin
  }

  login = async () => {
    const response = await fetch("/users/login/");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.error);
    }
    return body;
  };

  signup = async () => {
    const response = await fetch("/users/signup/")
    const body = await response.json()

    if(response.status !== 200) {
      throw Error(body.error)
    }
    return body
  }

  render() {
    const { navigate, login, toggleLogin } = this.props;

    const handleLogin = (e) => {
      e.preventDefault();

      //authenticate this user to see if we should log them in
      const currentUser = this.login()
        .then((res) => {
          this.setState({ currentUser: res.currentUser });
        })
        .catch((err) => console.log(err));

      if (
        e.target.elements.username.value.trim() !==
          this.state.currentUser.username ||
        e.target.elements.password.value.trim() !==
          this.state.currentUser.password
      ) {
        return alert("Invalid username or password");
      }

      navigate("/home");
    };

    const handleSignUp = (e) => {
      e.preventDefault()

      // check if email is already in db

      // else add 


      navigate('/home')

    }

    return login ? (
      <div class="container">
        <div class="centered-form">
          <div class="centered-form__box">
            <h1>
              Welcome to
              <br />
              <span>Good Night Out</span>
            </h1>
            <form onSubmit={handleLogin}>
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
            <button class="toggleform__button" onClick={() => toggleLogin(!login)}>Or if you don't have an account, <span>sign up</span></button>
          </div>
        </div>
      </div>
    ) : (
      <div class="container">
        <div class="centered-form">
          <div class="centered-form__box">
            <h1>
              Welcome to
              <br />
              <span>Good Night Out</span>
            </h1>
            <form onSubmit={handleSignUp}>
            <label>First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                required
              ></input>
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                required
              ></input>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                required
              ></input>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              ></input>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              ></input>
              <button>Sign Up</button>
            </form>
            <button class="toggleform__button" onClick={() => toggleLogin(!login)}>Or if you already have an account, <span>log in</span></button>
          </div>
        </div>
      </div>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();
  const [login, toggleLogin] = useState(true);

  return <App navigate={navigate} login={login} toggleLogin={toggleLogin}/>;
}

const admin = {
  firstname: "admin",
  lastname: "admin",
  username: "Admin",
  email: "imjacob933@gmail.com",
  password: "admin",
};
