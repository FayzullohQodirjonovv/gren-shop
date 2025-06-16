import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalslice"; 

export const store = configureStore({
  reducer: {
    modalSlice, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
