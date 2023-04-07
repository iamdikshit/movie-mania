import React from "react";
import { IoLogoGoogle } from "react-icons/io5";
const GoogleBtn = (props) => {
  return (
    <button
      onClick={() => props.OnClick()}
      className="  px-6
               
                py-2
                leading-tight
                rounded-full
                shadow-md
                bg-gradient-to-r from-pink-600 to-red-600
                hover:bg-gradient-to-r
                hover:from-pink-800
                hover:to-red-800
                transition
                duration-300
                ease-in-out     
                
                flex items-center gap-2
                "
    >
      <IoLogoGoogle />
      <span className="text-sm">
        Sign up <span className="hidden md:inline-block">with google</span>
      </span>
    </button>
  );
};

export default GoogleBtn;
