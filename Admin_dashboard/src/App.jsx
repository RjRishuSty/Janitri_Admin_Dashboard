import React, { useMemo } from "react";
import AppLayout from "./layouts/AppLayout";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./theme/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
              path: "dashboard",
              element: "",
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
