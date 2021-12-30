import React from "react";
import { useState, Link } from "react";
import NavBar from "../../components/navbar/NavBar";
import EditProfile from "./EditProfile";
import "./Profile.css";

import { FaPen } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPencil} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const [editMode, toggleEditMode] = useState(false);

  const changetoFalse = () => {
    toggleEditMode(!editMode);
  };

  const currentUser = {
    name: "Administrator",
    email: "admin@admin.com",
    password: "admin",
  };

  return (
    <>
      <NavBar />
      <div className="profile-container">
        <EditProfile />
        <div className="info-container">
          <h1>Hello, User</h1>
          <div className="Profile">
            <div className="name">Name: {currentUser.name}</div>
            <div className="email">Email: {currentUser.email}</div>
            <div className="password">Password: {currentUser.password}</div>
            <div
              className="edit-profile"
              onClick={() => toggleEditMode(!editMode)}
            >
              <FaPen />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
