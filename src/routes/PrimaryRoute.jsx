import React from 'react'
import HomePage from "../components/Pages/HomePage";
import CoachList from "../components/Pages/CoachList";
import LoginPage from "../components/Pages/LoginPage";
import Register from "../components/Pages/Register";
import CoachDetail from "../components/Pages/CoachDetail";

import { createBrowserRouter } from "react-router-dom";

export const primaryRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list",
    element: <CoachList />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/detail",
    element: <CoachDetail />,
  },
]);