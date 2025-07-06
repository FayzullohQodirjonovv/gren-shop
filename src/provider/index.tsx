import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "react-auth-kit"; // ✅ to'g'ri joydan import

const queryclient = new QueryClient();

const ProviderConf = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider
      authType="localstorage"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <Provider store={store}>
        <QueryClientProvider client={queryclient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </AuthProvider>
  );
};

export default ProviderConf;
