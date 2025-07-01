import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleAppTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setAppTheme: (state, actions) => {
      state.mode = actions.payload;
    },
  },
});

export const { toggleAppTheme, setAppTheme } = themeSlice.actions;
export default themeSlice.reducer;
