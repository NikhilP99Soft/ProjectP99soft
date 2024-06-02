import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Photos from "./components/pages/Photos.jsx";
import Home from "./components/pages/Home.jsx";
import Posts from "./components/pages/Posts.jsx";
import User from "./components/pages/User.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "photos",
        element: <Photos />,
      },
      {
        path: "post",
        element: <Posts />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
