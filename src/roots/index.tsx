import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blok from "../pages/blok";
import Shop from "../pages/shop";
import Search from "../pages/search";
import Login from "../pages/proacc";
import ProductDetailPage from "../pages/search/index";
import NotFound from "../pages/NotFound";
import Commit from "../pages/comit/index";
import Wishlist from "../pages/wishlist";
import Adress from "../pages/adress";
import Track from "../pages/track";
import Procuct from "../pages/myproduct";
import Detals from "../assets/components/detals/index";

export const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />, 
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
  },
  {
    path: "/account",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
{
  path: "/comit/:id",
  element: <Commit />,
},
{
  path: "/wishlist",
  element: <Wishlist />,
},
{
  path: "/adress",
  element: <Adress />,
},
{
  path: "/track",
  element: <Track />,
},
{
  path: "/Procuct",
  element: <Procuct />,
},
{
  path: "/detals/:id",
  element: <Detals />,
}
]);
