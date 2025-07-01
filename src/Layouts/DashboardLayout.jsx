import React, { use } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { GrLogout } from "react-icons/gr";
import { FaHome, FaTasks } from "react-icons/fa";
import { MdTask } from "react-icons/md";
import { AuthContext } from "../Provider/AuthContext";

const DashboardLayout = () => {
  const { logOut } = use(AuthContext);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
        </div>
        <Outlet />
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-xl text-base-content min-h-full w-80 p-4 flex flex-col justify-between">
          <div>
            <Link to="/" className="text-xl mb-10 block">
              <button className="btn bg-success w-full">
                Back To Home Page
              </button>
            </Link>
            <li className="mb-5">
              <NavLink to="/dashboard/home">
                <FaHome className="inline-block mr-2 " />
                Home
              </NavLink>
            </li>

            <li className="mb-5">
              <NavLink to="/dashboard/add-food">
                <FaTasks className="inline-block mr-2" />
                Add Foods
              </NavLink>
            </li>

            <li className="mb-5">
              <NavLink to="/dashboard/food-request">
                <MdTask className="inline-block mr-2" />
                My Food Request
              </NavLink>
            </li>
            <li className="mb-5">
              <NavLink to="/dashboard/manage-foods">
                <MdTask className="inline-block mr-2" />
                Manage My Food
              </NavLink>
            </li>
          </div>

          <div>
            <button
              onClick={logOut}
              className="flex w-full cursor-pointer items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />
              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
