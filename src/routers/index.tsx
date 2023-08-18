import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page from "../pages";
import About from "@/pages/About";

const router = createBrowserRouter([
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
]);

// function createBrowserRouter(
//   routes: RouteObject[],
//
//   opts?: {
//     basename?: string;
//     future?: FutureConfig;
//     hydrationData?: HydrationState;
//     window?: Window;
//   }
//
// ): RemixRouter;

export default router;
