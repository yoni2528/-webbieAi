import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authReducer.actions;
