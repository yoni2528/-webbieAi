import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loadWebsiteReducer = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startLoader(state) {
      state.isLoading = true;
    },
    stopLoader(state) {
      state.isLoading = false;
    },
  },
});

export const loadWebsiteActions = loadWebsiteReducer.actions;
