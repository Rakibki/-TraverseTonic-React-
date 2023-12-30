import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import PackageDetails from "../page/packageDetails/PackageDetails";
import Blog from "../page/blog/Blog";
import Tours from "../page/tours/Tours";
import Shop from "../page/shop/Shop";
import AboutUs from "../page/aboutUs/AboutUs";
import ContactUs from "../page/contactUs/ContactUs";


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
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/tours",
          element: <Tours />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/aboutUs",
          element: <AboutUs />
        },
        {
          path: "/contactUs",
          element: <ContactUs />
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