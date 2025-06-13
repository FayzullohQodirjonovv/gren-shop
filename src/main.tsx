import { createRoot } from "react-dom/client";
import ProviderConf from "./tools/provider";
import { RouterProvider } from "react-router-dom";
import { root } from "./roots"; 
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ProviderConf>
    <RouterProvider router={root} />
  </ProviderConf>
);
