import React from "react";
import { useState, Link } from "react";
import NavBar from "../../components/NavBar";
import EditProfile from "./EditProfile";

import { faPencil } from 'react-icons/fa';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPencil} from "@fortawesome/free-solid-svg-icons";

let userid = "Test-name";

function Profile() {
  const [editMode, toggleEditMode] = useState(false);

  const changetoFalse = () => {
    toggleEditMode(!editMode);
  }

  const currentUser = {
    name: "Administrator",
    email: "admin@admin.com",
    password: "admin"
  }


  return (
    <div className="profile-container">
      {editMode ? (
        <div>
          <EditProfile changetoFalse={changetoFalse}/>
        </div>
      ) : (
        <div className="info-container">
          <h1>Hello, {userid}</h1>
          <div className="Profile">
            <div className="name">Name: {currentUser.name}</div>
            <div className="email">Email: {currentUser.email}</div>
            <div className="password">Password: {currentUser.password}</div>
            <Link className="edit-profile" onClick={() => toggleEditMode(!editMode)}>
              <faPencil/>
              Good Night Out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
