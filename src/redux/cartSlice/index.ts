import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";
import type { ProductsType } from "../../@types";

interface CartState {
  cart: ProductsType[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductsType>) {
      const existing = state.cart.find((item) => item._id === action.payload._id);
      if (existing) {
        existing.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    increaseCount(state, action: PayloadAction<string>) {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item) item.count += 1;
    },
    decreaseCount(state, action: PayloadAction<string>) {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item && item.count > 1) item.count -= 1;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addToCart, increaseCount, decreaseCount, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
