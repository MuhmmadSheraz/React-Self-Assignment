import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

let Navbar = () => {
  return (
    <>
      <div className="navMain">
        <NavLink exact className="links" activeClassName="activeNav" to="./" >
          Home
        </NavLink>
        <NavLink exact className="links" activeClassName="activeNav" to="./About">
          About
        </NavLink>
        <NavLink exact className="links" activeClassName="activeNav" to="./ContactUs">
          COntact Us
        </NavLink>
      </div>
    </>
  );
};
export default Navbar;
