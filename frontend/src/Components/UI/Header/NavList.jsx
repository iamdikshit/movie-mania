import React from "react";

import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { loggedOut } from "../../Store/UserSlice";
const NavList = (props) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.setItem("token", "");
    dispatch(loggedOut());
    props.OnClick();
  };
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

      {isLoggedIn && (
        <li
          onClick={logoutHandler}
          className="cursor-pointer text-lg hover:text-blue-500"
        >
          Logout
        </li>
      )}
    </ul>
  );
};

export default NavList;
