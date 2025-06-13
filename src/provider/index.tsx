// src/tools/ProviderConf.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const ProviderConf = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderConf;
