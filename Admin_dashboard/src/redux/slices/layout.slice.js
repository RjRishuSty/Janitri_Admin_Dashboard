import { createSlice } from "@reduxjs/toolkit";

const isToggle = false;

const initialState = {
  isToggle,
  gridSize: isToggle ? { sm: 2, md: 1 } : { sm: 3, md: 2 },
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    handleToggleLayout: (state) => {
      state.isToggle = !state.isToggle;
      state.gridSize = state.isToggle ? { sm: 2, md: 1 } : { sm: 3, md: 2 };
    },
    handleCloseSidebar:(state,action)=>{
      state.isToggle = action.payload
    }
  },
});

export const { handleToggleLayout ,handleCloseSidebar} = layoutSlice.actions;

export default layoutSlice.reducer;
