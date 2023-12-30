import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import PackageDetails from "../page/packageDetails/PackageDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/PackageDetails/:id",
          element: <PackageDetails />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
  ]);


  export default router