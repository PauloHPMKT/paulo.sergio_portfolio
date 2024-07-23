import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      // { path: "/about", element: <About /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);
