import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { AddProduct } from "../pages/AddProduct";
import Products from "../pages/Product";
import EditProduct from "../pages/EditProduct";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/edit/:id",
        element: <EditProduct />,
      }
    ],
  },
]);

export default router;
