import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../Pages/Loading";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const handleLogOut = () => {
    signOutUser()
      .then(() => toast.success("Logout Successful"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/available-food">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>

      <li>
        <NavLink to="/terms-and-conditions">Terms And Conditions</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard/home">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow">
      <div className="navbar max-w-7xl mx-auto px-4 py-2">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-900"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl font-bold text-emerald-500 hidden lg:block"
          >
            Food <span className="text-primary">Share</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium gap-4 dark:text-white">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="user"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-72"
              >
                <li className="pb-2 border-b">
                  <p className="text-sm">{user.displayName}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </li>
                <li className="pt-2">
                  <button
                    onClick={handleLogOut}
                    className="btn btn-secondary w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink to="/auth/login" className="btn btn-secondary px-5">
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="btn btn-secondary ml-3 px-5"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </nav>
  );
};

export default Navbar;
