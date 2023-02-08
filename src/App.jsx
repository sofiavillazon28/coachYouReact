import { RouterProvider } from "react-router-dom";

import { primaryRoute } from '../src/routes/PrimaryRoute';

import "../src/styles/scss/index.scss"

function App() {
  return (
    <RouterProvider router={primaryRoute} />
  );
}

export default App;
