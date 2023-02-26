import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomError {
  title: string;
  content: string;
  isError: boolean;
}

const initialState: CustomError = {
  title: "",
  content: "",
  isError: false,
};

export const errorReducer = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setError(state, action: PayloadAction<{ title: string; content: string }>) {
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.isError = true;
    },
    removeError(state) {
      state.title = "";
      state.content = "";
      state.isError = false;
    },
  },
});

export const errorActions = errorReducer.actions;
