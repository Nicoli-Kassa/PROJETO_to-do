import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Day from "./Pages/Day";
import Month from "./Pages/Month";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      { index: true, element: <Day /> },
      { path: "day", element: <Day /> },
      { path: "month", element: <Month /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
