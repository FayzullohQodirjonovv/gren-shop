import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalslice";
import cartSlice from "./cartSlice"; 

export const store = configureStore({
  reducer: {
    modalSlice,
    cart: cartSlice, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
