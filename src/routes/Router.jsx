import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

// New Pages (create these)
import Properties from "../pages/Properties/Properties";
import Buy from "../pages/Buy/Buy";
import Rent from "../pages/Rent/Rent";
import Agents from "../pages/Agents/Agents";
import About from "../pages/About/About";

// User Pages
import Dashboard from "../pages/Dashboard/Dashboard";
import MyListings from "../pages/MyListings/MyListings";
import Saved from "../pages/Saved/Saved";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../pages/Home/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/buy",
        element: <Buy />,
      },
      {
        path: "/rent",
        element: <Rent />,
      },
      {
        path: "/agents",
        element: <Agents />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/saved",
        element: (
          <PrivateRoute>
            <Saved />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
