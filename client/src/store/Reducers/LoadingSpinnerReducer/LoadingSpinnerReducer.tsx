import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const spinnerReducer = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startSpinner(state) {
      state.isLoading = true;
    },
    stopSpinner(state) {
      state.isLoading = false;
    },
  },
});

export const spinnerActions = spinnerReducer.actions;
