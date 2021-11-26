import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const loggedIn = localStorage.getItem("user");

  const Logout = () => {
    localStorage.setItem("");
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-bar-container">
          <navlogo className="nav-logo-container">
            <Link className="nav-logo" to="/home">
              <FontAwesomeIcon className="icon" icon={faMoon} />
              Good Night Out
            </Link>
          </navlogo>
          <bars />
          <ul className="nav-menu">
            {loggedIn ? (
              <Link
                to="/loginform"
                className="nav-link"
                onClick={Logout}
              >
                Logout
              </Link>
            ) : (
              <li className="nav-item">
                <Link
                  to="/loginform"
                  className="nav-link"
                >
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                to="/eventlist"
                className={loggedIn ? "nav-link" : "disabled-link"}
              >
                Event List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className={loggedIn ? "nav-link" : "disabled-link"}
              >
                Profile
              </Link>
            </li>
          </ul>
          <div className="nav-btn">
            <Link
              className={loggedIn ? "nav-link" : "disabled-link"}
              to="/profile"
            >
              Settings
            </Link>
          </div>
        </div>
        {false ? <button>Log Out</button> : <div></div>}
      </nav>
    </>
  );
}
