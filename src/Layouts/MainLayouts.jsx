import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-116px)] ">
        <div className="">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayouts;
