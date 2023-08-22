import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page from "../pages";
import About from "@/pages/About";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page",
    element: <Page />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const router = createBrowserRouter(routes);

export default router;
