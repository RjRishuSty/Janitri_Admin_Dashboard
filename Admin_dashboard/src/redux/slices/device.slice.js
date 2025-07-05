import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  device: JSON.parse(localStorage.getItem("deviceData")) || [],
};

const deviceSlice = createSlice({
  name: "Device Data",
  initialState,
  reducers: {
    handleGetDeviceData: (state, action) => {
      state.device = action.payload; // Overwrite (not append)
      localStorage.setItem("deviceData", JSON.stringify(action.payload));
    },
    handleAddDevice: (state, action) => {
      state.device.push(action.payload); // append new device
      localStorage.setItem("deviceData", JSON.stringify(state.device));
    },
  },
});

export const { handleGetDeviceData,handleAddDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
