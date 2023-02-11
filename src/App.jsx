import { UserProvider } from "./context/userContext.jsx";
import { RouterProvider } from "react-router-dom";

import { primaryRoute } from '../src/routes/PrimaryRoute';

import "../src/styles/scss/index.scss"

function App() {
  return (
    <UserProvider>
      <RouterProvider router={primaryRoute} />
    </UserProvider>
  );
}

export default App;
