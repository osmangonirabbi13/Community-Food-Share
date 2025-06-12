import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../Pages/Loading";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        if (!loading) {
          return toast.success("Logout Successfull");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Links = (
    <ul className="dark:bg-gray-900 text-black dark:text-white">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/available-foods">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/add-food">Add Food</NavLink>
      </li>
      <li>
        <NavLink>Manage My Foods</NavLink>
      </li>
      <li>
        <NavLink>My Food Request</NavLink>
      </li>
    </ul>
  );
  return (
    <nav className="header-menu">
      <div className="navbar   p-0 bg-white px-2 md:px-12 lg:px-16 xl:px-50 lg:py-4 body items-center dark:shadow-sm dark:bg-gray-900 text-black dark:text-white border-b-1 border-blue-100">
        {/* Nav bar start  */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  w-52 p-2 shadow dark:bg-gray-900 text-black dark:text-white"
            >
              {Links}
            </ul>
          </div>
          <a className=" text-lg md:text-2xl lg:text-2xl font-semibold md:flex lg:flex hidden">
            Food <span className="text-emerald-400 pl-2"> Share </span>
          </a>
          <div></div>
        </div>
        {/* Nav bar center  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-xl font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/available-foods">Available Foods</NavLink>
            </li>
            <li>
              <NavLink to="/add-food">Add Food</NavLink>
            </li>
            <li>
              <NavLink>Manage My Foods</NavLink>
            </li>
            <li>
              <NavLink>My Food Request</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 ">
              {/* nav  bar end  */}

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle w-14 h-14 avatar"
                >
                  <div className="w-10  rounded-full">
                    <img
                      className=" "
                      alt="user profile"
                      src={`${user && user.photoURL}`}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  w-70 p-2 shadow "
                >
                  <li>
                    <div className="flex flex-col pb-4 items-start border-b-2 border-gray-200">
                      <p className=" text-sm pb-2 ">
                        {user && user.displayName}
                      </p>
                      <p className="">{user && user.email}</p>
                    </div>
                  </li>
                  <li></li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="btn btn-secondary px-6 md:px-10"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="btn btn-secondary ml-5 mr-4 px-6 md:px-10"
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
