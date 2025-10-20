import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Authentication!</h1>,
  },
  {
    path: "/news",
    element: <h1>This is Today's hot news!</h1>,
  },
  {
    path: "/*",
    element: <h1>Error 404!</h1>,
  },
]);

export default router;
