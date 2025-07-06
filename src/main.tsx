import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./roots";
import ProviderConf from "./provider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "react-auth-kit";
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider authType="localstorage" authName="_auth">
      <ProviderConf>
        <RouterProvider router={root} />
        <Toaster />
      </ProviderConf>
    </AuthProvider>
  </StrictMode>
);
