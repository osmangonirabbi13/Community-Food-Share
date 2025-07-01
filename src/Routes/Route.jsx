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
import ManageFoods from "../Pages/ManageFoods";
import FoodEdit from "../Pages/FoodEdit";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome";
import AboutUs from "../Pages/AboutUs";
import TermsAndConditions from "../Pages/TermsAndConditions";
import ContactUs from "../Pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
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
        path: "update/:id",
        element: (
          <PrivateRoute>
            <FoodEdit />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "terms-and-conditions",
        Component: TermsAndConditions,
      },
      {
        path: "contact-us",
        Component: ContactUs,
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        path: "home",
        Component: DashboardHome,
      },
      {
        path: "add-food",
        element: <AddFood />,
      },
      {
        path: "food-request",
        element: <FoodRequest />,
      },
      {
        path: "manage-foods",
        element: <ManageFoods />,
      },
    ],
  },
]);
