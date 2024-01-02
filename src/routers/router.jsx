import { createBrowserRouter } from "react-router-dom";
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
import BlogDetails from "../page/blogDetails/BlogDetails";
import Error from "../page/error/Error";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../components/productDetails/ProductDetails";
import ViewCard from "../page/viewCard/ViewCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/PackageDetails/:id",
        element: (
          <PrivateRoute>
            <PackageDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/dashboard/viewcard",
        element: <ViewCard />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/bolg-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
