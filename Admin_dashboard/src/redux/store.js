import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme.slice";
import layoutSlice from "./slices/layout.slice";
import filterSlice from "./slices/filter.slice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    layout: layoutSlice,
    filter: filterSlice,
  },
});

export default store;
