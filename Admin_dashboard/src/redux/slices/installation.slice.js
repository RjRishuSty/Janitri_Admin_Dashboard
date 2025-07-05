import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  installations: [],
};

const installationSlice = createSlice({
  name: "installation",
  initialState,
  reducers: {
    addInstallation: (state, action) => {
      state.installations.push(action.payload);
    },
    updateStatus: (state, action) => {
      const index = state.installations.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.installations[index].status = action.payload.status;
      }
    },
  },
});

export const { addInstallation, updateStatus } = installationSlice.actions;
export default installationSlice.reducer;
