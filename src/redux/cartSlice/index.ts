import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductsType } from "../../@types";

interface CartState {
  cart: ProductsType[];
}

const savedCart = localStorage.getItem("cart");
const initialState: CartState = {
  cart: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductsType>) => {
      const existing = state.cart.find(item => item._id === action.payload._id);
      if (existing) {
        existing.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseCount: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(i => i._id === action.payload);
      if (item) item.count += 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseCount: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(i => i._id === action.payload);
      if (item && item.count > 1) {
        item.count -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(i => i._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, increaseCount, decreaseCount, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
