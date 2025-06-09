import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-3xl  mx-auto px-8 md:px-12 lg:px-16">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
