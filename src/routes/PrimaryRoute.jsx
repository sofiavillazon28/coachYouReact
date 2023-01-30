import React from 'react'
import HomePage from "../components/Pages/HomePage";
import CouchList from "../components/Pages/CouchList";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import CouchDetail from "../components/Pages/CouchDetail";

import { createBrowserRouter } from "react-router-dom";

export const primaryRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list",
    element: <CouchList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/detail",
    element: <CouchDetail />,
  },
]);