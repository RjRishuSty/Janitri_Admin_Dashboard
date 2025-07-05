import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme.slice";
import layoutSlice from "./slices/layout.slice";
import filterSlice from "./slices/filter.slice";
import installationSlice from './slices/installation.slice';
import serviceVisitSlice from './slices/serviceVisit.slice';
import amcTrackerSlice from './slices/amcTracker.slice';
import alertSlice from './slices/alert.slice';
import deviceSlice from './slices/device.slice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    layout: layoutSlice,
    filter: filterSlice,
    installation:installationSlice,
    serviceVisit:serviceVisitSlice,
    amcTracker:amcTrackerSlice,
    alert:alertSlice,
    deviceData:deviceSlice,
  },
});

export default store;
