import React from "react";
import { images } from "../../../assets";
const Footer = () => {
  return (
    <footer className="px-8  bottom-0 md:px-16 pt-16 pb-4 flex items-center justify-between gap-4">
      <div className="logo">
        <img className="w-16 md:w-24" src={images.logo} alt="" />
      </div>
      <div className="footer-content">
        <h1 className="text-slate-200 text-sm">
          © 2024 MovieMania. All rights reserved.
        </h1>
        <h1 className="text-slate-200 text-xs">
          Developed by{" "}
          <a href="https://www.yesonance.com/" target="_top">
            Yesonance
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
