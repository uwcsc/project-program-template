import React from "react";
import "./NavBar.css";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <>
      <nav className="nav">
        <Link className="nav-logo" to="/">
          <FontAwesomeIcon className="icon" icon={faMoon} />
          Good Night Out
        </Link>
        <bars />
        <navmenu className="nav-menu">
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
          <Link to="/eventlist" className="nav-link">
            Event List
          </Link>
          <nav-btn className="nav-btn">
            <Link className="nav-btn-link" to="/profile">
              Profile
            </Link>
          </nav-btn>
        </navmenu>
      </nav>
    </>
  );
}
