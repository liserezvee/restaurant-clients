import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: (
          <PrivateRoutes>
            <Menu></Menu>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      //admin routes
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoutes>
            <UpdateItem></UpdateItem>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
