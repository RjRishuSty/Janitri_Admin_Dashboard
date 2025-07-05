import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    addAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
  },
});

export const { addAlert } = alertSlice.actions;
export default alertSlice.reducer;
