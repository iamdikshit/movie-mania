import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
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
