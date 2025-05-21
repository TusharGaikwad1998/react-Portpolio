import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Github from "./github";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-blue-500" : "bg-red"}`
            }
          >
            Home
          </NavLink>

          <NavLink to="/About"> About </NavLink>

          <NavLink to="/Github"> Github</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
