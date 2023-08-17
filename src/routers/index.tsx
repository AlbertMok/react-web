import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page",
    element: <Page></Page>,
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
