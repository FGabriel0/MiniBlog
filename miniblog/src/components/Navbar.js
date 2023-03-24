import React from "react";
import { NavLink } from "react-router-dom";

import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <NavLink to="/" className={Styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={Styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Login"
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Register"
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            Cadrastrar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
