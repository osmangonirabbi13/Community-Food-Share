import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import PrivateRoute from "../Provider/PrivateRoute";
import AddFood from "../Pages/addFood";
import AvailableFoods from "../Pages/AvailableFoods";
import SingleFood from "../Pages/SingleFood";
import FoodRequest from "../Pages/FoodRequest";

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
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/available-food",
        Component: AvailableFoods,
      },
      {
        path: "/available-food/:id",
        element: (
          <PrivateRoute>
            <SingleFood />
          </PrivateRoute>
        ),
      },
      {
        path: "food-request",
        element: (
          <PrivateRoute>
            <FoodRequest />
          </PrivateRoute>
        ),
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
      {
        path: "/auth/login",
        Component: Login,
      },
    ],
  },
]);
