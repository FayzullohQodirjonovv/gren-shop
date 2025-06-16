import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient(); 

const ProviderConf = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryclient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

export default ProviderConf;
