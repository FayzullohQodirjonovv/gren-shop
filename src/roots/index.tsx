import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blok from "../pages/blok"; 
import Shop from "../pages/shop"; 

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blok",
    element: <Blok />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);
