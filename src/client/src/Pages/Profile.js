import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import "./css/Profile.css";

import { FaPen } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPencil} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const navigate = useNavigate();
  const [editMode, toggleEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const currUsername = localStorage.getItem("currentUser");

  const currentUserUsername = localStorage
    .getItem("currentUser")
    .padEnd(12, ".");
  console.log(currentUserUsername);

  useEffect(async () => {
    const response = await fetch("/users/" + currentUserUsername + "/");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body);
    }
    console.log(body);
    setCurrentUser(body);
  }, []);

  const updateUser = async (updates) => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    };
    fetch("/users/" + currentUserUsername + "/update", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
    window.location.reload();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      //save changes
      const username = e.target.elements.username.value;
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      await updateUser({
        username,
        email,
        password
      })
    }
    toggleEditMode(!editMode);
    //send this info to database as async

    //send alert once data is updated
    navigate("/profile");
  };

  return (
    <>
      <NavBar />
      <div class="container">
        <div className="container__box">
          <h1>
            Hello, <span>{currUsername}</span>
          </h1>
          <form class="edit-profile-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder={currUsername}
              disabled={editMode ? "" : "disabled"}
              required
            ></input>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder={currentUser.email}
              disabled={editMode ? "" : "disabled"}
              required
            ></input>
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder={currentUser.password}
              disabled={editMode ? "" : "disabled"}
              required
            ></input>
            {editMode ? (
              <button>Save Changes</button>
            ) : (
              <button>
                <FaPen />
                <span>Edit Profile</span>
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
