import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
    ],
  },

  // Login section

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
