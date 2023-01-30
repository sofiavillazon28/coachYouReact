import React from 'react'
import HomePage from "../components/PrincipalPages/HomePage";
import CouchList from "../components/PrincipalPages/CouchList";
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
]);