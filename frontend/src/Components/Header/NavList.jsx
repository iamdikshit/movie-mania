import React from "react";

import { NavLink } from "react-router-dom";

const NavList = (props) => {
  return (
    <ul {...props.classes}>
      <li className="cursor-pointer">
        <NavLink
          to={"/"}
          className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`}
          end
        >
          Home
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink
          to={"movies"}
          className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`}
        >
          Movies
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink
          to={"about"}
          className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`}
        >
          About
        </NavLink>
      </li>
      <li className="cursor-pointer">
        <NavLink
          to={"contact"}
          className={({ isActive }) => `${isActive ? "text-blue-500" : ""}`}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
