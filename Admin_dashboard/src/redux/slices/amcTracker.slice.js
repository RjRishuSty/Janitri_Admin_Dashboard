import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contracts: [],
};

const amcTrackerSlice = createSlice({
  name: "amcTracker",
  initialState,
  reducers: {
    addContract: (state, action) => {
      state.contracts.push(action.payload);
    },
  },
});

export const { addContract } = amcTrackerSlice.actions;
export default amcTrackerSlice.reducer;
