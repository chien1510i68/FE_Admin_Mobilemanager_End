import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import routesAdmin from "./routes/AdminRoutes";
// import DefaultLayoutUser from "./User/layout/DefaultLayoutUser";
// import DefaultLayout from "./Admin/layout/DefaultLayout";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React>
  <RouterProvider router={routesAdmin} />
  // </React>
);

reportWebVitals();
