import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { WebDataState, WebData } from "./types";

const webData = {
  title: "",
  subtitle: "",
  advantages: [],
  products: [],
  aboutMe: {
    title: "",
    content: "",
  },
  webId: "",
  template: 0,
  color: "",
};

export const initialWebState: WebDataState = {
  webData,
  webImages: {
    imageUrl: [],
  },
  baseData: {},
};

export const webdataReducer = createSlice({
  name: "webdata",
  initialState: initialWebState,
  reducers: {
    insertWebData(
      state,
      action: PayloadAction<{ data: WebData; webId: string }>
    ) {
      state.webData = action.payload.data;
      state.webData.id = action.payload.webId;
    },
    setWebImages(state, action) {
      state.webImages.imageUrl = action.payload;
    },
    setWebDetails(state, action) {
      state.baseData = action.payload;
    },
    cleanWebDetails() {
      return initialWebState;
    },
    setWebsiteFromDatabase(
      state,
      action: PayloadAction<{
        data: WebData;
        images: Array<{ src: string; attribute: string }>;
      }>
    ) {
      state.webData = action.payload.data;
      state.webImages.imageUrl = action.payload.images.map(
        (image: { src: string; attribute: string }) => {
          return image.src;
        }
      );
    },
    setSingleDetails(
      state,
      action: PayloadAction<{
        element: string | [string, number | string, string?];
        content: string;
      }>
    ) {
      const element = action.payload.element;

      if (typeof element === "string") {
        state.webData[element] = action.payload.content;
      } else if (element.length === 2) {
        state.webData[element[0]][element[1]] = action.payload.content;
      } else if (element.length > 2) {
        if (!element[2]) return;
        state.webData[element[0]][element[1]][element[2]] =
          action.payload.content;
      }
    },
  },
});

export const webdataActions = webdataReducer.actions;
