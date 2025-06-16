import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAuthorizationModalVisiblty: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openModal(state) {
      state.openAuthorizationModalVisiblty = true;
    },
    closeModal(state) {
      state.openAuthorizationModalVisiblty = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
