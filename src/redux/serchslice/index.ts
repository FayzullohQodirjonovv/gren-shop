// src/redux/serchslice/index.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductsType } from "../../@types";

interface SearchState {
  products: ProductsType[];
}

const initialState: SearchState = {
  products: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductsType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = searchSlice.actions;
export default searchSlice.reducer;
