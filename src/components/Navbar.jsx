import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <ul>
        <li className="flex flex-1  ">
          <NavLink
            className="bg-gray-300 border border-black rounded-lg px-1.5 m-2"
            to="/contact"
          >
            contact me
          </NavLink>
          {
            <NavLink
              to="/footer"
              className="bg-gray-300  border border-black rounded-lg px-1.5 m-2 "
            >
              Footer
            </NavLink>
          }
        </li>
      </ul>
    </>
  );
}

export default Navbar;
