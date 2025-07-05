import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visits: [],
};

const serviceVisitSlice = createSlice({
  name: "serviceVisit",
  initialState,
  reducers: {
    handleServiceVisitLog: (state, action) => {
      state.visits.push(action.payload);
    },
  },
});

export const { handleServiceVisitLog } = serviceVisitSlice.actions;
export default serviceVisitSlice.reducer;
