import React from "react";

export const UserHeader = (props) => {
  return (
    <div className="user-info flex items-start gap-2">
      <img
        className="w-8 h-8 rounded-full shadow-lg"
        src={props.image}
        alt="user"
      />
      <div>
        <h1 className="text-xs text-white">Welcome {props.name}👋</h1>
        <h1 className="text-sm text-white">Lets relax get your movies!</h1>
      </div>
    </div>
  );
};
