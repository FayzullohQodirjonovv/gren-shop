import { createRoot } from "react-dom/client";
import ProviderConf from "./tools/provider";
import { RouterProvider } from "react-router-dom";
import { root } from "./roots"; 
import "./index.css";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")!).render(
  <ProviderConf>
    <RouterProvider router={root} />
        <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </ProviderConf>
);