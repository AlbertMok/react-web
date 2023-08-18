import "./style.scss";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/routers";
const AppMain = () => {
  return (
    <>
      <div className="app-main">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    </>
  );
};

export default AppMain;
