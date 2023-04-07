import React from "react";
import Navbar from "../UI/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
const Root = () => {
  return (
    <>
      <main className="w-full ">
        <Navbar />
        <section>
          <Outlet />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Root;
