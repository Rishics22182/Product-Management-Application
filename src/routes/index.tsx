import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/edit",
        element: <EditProduct />,
      },
    ],
  },
]);

export default router;
