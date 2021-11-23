import React from "react";
import "./NavBar.css";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(loggedIn) {
  return (
    <>
      <nav className="nav">
        <div className="nav-bar-container">
          <navlogo className="nav-logo-container">
            <Link className="nav-logo" to="/">
              <FontAwesomeIcon className="icon" icon={faMoon} />
              Good Night Out
            </Link>
          </navlogo>
          <bars />
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/eventlist" className="nav-link">
                Event List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
          <div className="nav-btn">
            <Link className="nav-btn-link" to="/profile">
              Settings
            </Link>
          </div>
        </div>
        {loggedIn ? <button>Log Out</button> : <div></div>} 
      </nav>
    </>
  );
}
