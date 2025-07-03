import React, { useMemo } from "react";
import AppLayout from "./layouts/AppLayout";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./theme/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InventoryDashboard from "./pages/InventoryDashboard";
import InstallationModule from "./pages/InstallationModule";
import ServiceVisitLogs from "./pages/ServiceVisitLogs";
import AMCTracker from "./pages/AMCTracker";
import AlertsPhotoLogs from "./pages/AlertsPhotoLogs";

const App = () => {
  const mode = useSelector((state) => state.theme.mode);
  const currentTheme = mode === "light" ? lightTheme : darkTheme;

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
