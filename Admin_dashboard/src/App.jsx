import React, { useEffect, useMemo } from "react";
import AppLayout from "./layouts/AppLayout";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./theme/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InventoryDashboard from "./pages/InventoryDashboard";
import InstallationModule from "./pages/InstallationModule";
import ServiceVisitLogs from "./pages/ServiceVisitLogs";
import AMCTracker from "./pages/AMCTracker";
import AlertsPhotoLogs from "./pages/AlertsPhotoLogs";
import { handleGetDeviceData } from "./redux/slices/device.slice";
import { deviceData } from "./constants/deviceData";

const App = () => {
  const mode = useSelector((state) => state.theme.mode);
  const currentTheme = mode === "light" ? lightTheme : darkTheme;
  const dispatch = useDispatch();

  useEffect(() => {
    const deviceFlag = localStorage.getItem("deviceDataInitialized");
    const existingDeviceData = localStorage.getItem("deviceData");

    if (!deviceFlag || !existingDeviceData) {
      // Set deviceData once and flag it
      localStorage.setItem("deviceData", JSON.stringify(deviceData));
      localStorage.setItem("deviceDataInitialized", "true");
      dispatch(handleGetDeviceData(deviceData));
    }
  }, [dispatch]);

  //*Router...
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <AppLayout />,
          children: [
            {
              path: "",
              element: <InventoryDashboard />,
            },
            {
              path: "/installation",
              element: <InstallationModule />,
            },
            {
              path: "/service-logs",
              element: <ServiceVisitLogs />,
            },
            {
              path: "/contracts",
              element: <AMCTracker />,
            },
            {
              path: "/alerts",
              element: <AlertsPhotoLogs />,
            },
          ],
        },
      ]),
    []
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
