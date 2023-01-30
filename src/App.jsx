import React from 'react'
import "../src/styles/css/index2.css"
import { primaryRoute } from '../src/routes/PrimaryRoute';
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={primaryRoute} />
    </>
  );
}

export default App;
