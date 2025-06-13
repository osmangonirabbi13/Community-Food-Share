import Lottie from "lottie-react";
import myAnimation1 from "../assets/Lottie/login.json";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";

import toast, { Toaster } from "react-hot-toast";
import { use } from "react";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const { signIn, signInGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign in user

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        navigate(from);
        toast.success("Login Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
        toast.success("Google Sign-In Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="mt-16 p-4 flex justify-center">
      <div className="border border-[#7f7e7f38] my-8 lg:w-[50vw] w-full overflow-hidden flex rounded-xl shadow-lg items-center">
        <div
          onSubmit={handleLogin}
          className="w-full flex flex-col items-center p-6 lg:p-20 gap-4"
        >
          <form className=" w-full flex flex-col items-center gap-4">
            <h1 className="text-2xl font-semibold">LOGIN</h1>
            <label className="input flex items-center gap-2 w-full border-[#7f7e7f38] border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                required
                name="email"
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input border border-[#7f7e7f38] w-full flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                required
                name="password"
                type="password"
                className="grow"
                placeholder="Password"
              />
            </label>
            <button className="btn text-white bg-[#1976D2] w-full">
              Login Now
            </button>
          </form>

          <div className="divider"></div>
          <button onClick={handleGoogle} className="mt-4 btn w-full">
            <FaGoogle /> Login with google
          </button>
          <p className="text-sm mt-2">
            Don’t Have An Account ?{" "}
            <Link to="/auth/register" className="btn-link text-secondary">
              Register
            </Link>{" "}
          </p>
        </div>
        <div className="lg:w-[50vw] h-full lg:flex hidden  bg-gradient-to-r from-sky-500 to-indigo-500">
          <Lottie animationData={myAnimation1} />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
