import React from "react";

import { NavLink } from "react-router-dom";

const NavList = (props) => {
  return (
    <ul {...props.classes}>
      <NavLink
        onClick={props.OnClick}
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? "text-blue-500" : ""} text-lg`
        }
        end
      >
        <li className="cursor-pointer">Home</li>
      </NavLink>
      <NavLink
        onClick={props.OnClick}
        to={"movies"}
        className={({ isActive }) =>
          `${isActive ? "text-blue-500" : ""} text-lg`
        }
      >
        <li className="cursor-pointer">Movies</li>
      </NavLink>
      <NavLink
        onClick={props.OnClick}
        to={"about"}
        className={({ isActive }) =>
          `${isActive ? "text-blue-500" : ""} text-lg`
        }
      >
        <li className="cursor-pointer">About</li>
      </NavLink>
      <NavLink
        onClick={props.OnClick}
        to={"contact"}
        className={({ isActive }) =>
          `${isActive ? "text-blue-500" : ""} text-lg`
        }
      >
        <li className="cursor-pointer">Contact</li>
      </NavLink>
    </ul>
  );
};

export default NavList;
