// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalslice"; // reducer

export const store = configureStore({
  reducer: {
    modalSlice, // reducer nomi
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
