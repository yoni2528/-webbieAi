import { configureStore } from "@reduxjs/toolkit";

import {
  errorReducer,
  spinnerReducer,
  loadWebsiteReducer,
  webdataReducer,
  authReducer,
} from "./Reducers/index";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    loader: loadWebsiteReducer.reducer,
    webdata: webdataReducer.reducer,
    spinner: spinnerReducer.reducer,
    error: errorReducer.reducer,
    auth: authReducer.reducer,
  },
});

export default store;
