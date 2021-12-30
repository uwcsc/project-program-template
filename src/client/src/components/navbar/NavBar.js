import React from "react";
import { Nav, NavLink, Bars, NavBtnLink, NavMenu, NavBtn, NavLogo } from './navbarElements.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {

  return (
    <>
      <Nav className="nav">
        <NavLogo className="nav-logo" to="/">
          <FontAwesomeIcon className="icon" icon={faMoon} />
          Good Night Out
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/eventlist" activeStyle>
            Event List
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavBtn to="/" activeStyle>
          <NavBtnLink to="/">Log Out</NavBtnLink>
        </NavBtn>
        </NavMenu>
        {/* <NavBtn to="/" activeStyle>
          <NavBtnLink to="/">Log Out</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
}
