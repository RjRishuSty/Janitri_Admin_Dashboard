import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme.slice";
import layoutSlice from "./slices/layout.slice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    layout:layoutSlice,
  },
});

export default store;
