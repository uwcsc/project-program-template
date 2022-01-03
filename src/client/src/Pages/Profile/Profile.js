import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import "./Profile.css";

import { FaPen } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPencil} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const navigate = useNavigate();
  const [editMode, toggleEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

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

  const currUsername = localStorage.getItem("currentUser");

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username;
    const email = e.target.elements.email;
    const password = e.target.elements.password;
    //send this info to database as async

    //send alert once data is updated
    toggleEditMode(!editMode);
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
              placeholder={currentUser.username}
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
              <button onClick={() => toggleEditMode(!editMode)}>
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
