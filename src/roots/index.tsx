import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blok from "../pages/blok"; 
import Shop from "../pages/shop"; 
import Search from "../pages/search";
import ProductDetailPage from "../pages/search/index"; 

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
  {
    path: "/search",
    element: <Search />,
  },
{
  path: "/search/:id",
  element: <ProductDetailPage />, 
}
]);
