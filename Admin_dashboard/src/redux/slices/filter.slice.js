import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amcStatus: "",
  status: "",
  facility: "",
  battery: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByAmcStatus: (state, action) => {
        state.amcStatus = action.payload;
    },
    filterByStatus: (state, action) => {
        state.status = action.payload
    },
    filterByfacility: (state, action) => {
        state.facility = action.payload
    },
    filterBybattery: (state, action) => {
        state.battery = action.payload
    },
  },
});

export const {
  filterByAmcStatus,
  filterByStatus,
  filterBybattery,
  filterByfacility,
} = filterSlice.actions;

export default filterSlice.reducer;
