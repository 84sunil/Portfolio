import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">SUNIL LUHAR</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav-item" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Services" className="nav-item" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio"
            className="nav-item"
            activeClassName="active"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="nav-item" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
