import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalslice";
import cartSlice from "./cartSlice"; 
import serchslice from "./serchslice";

export const store = configureStore({
  reducer: {
    modalSlice,
    cart: cartSlice, 
    search: serchslice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
