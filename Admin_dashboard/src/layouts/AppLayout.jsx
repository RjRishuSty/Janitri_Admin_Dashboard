import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const size = useSelector((state) => state.layout.gridSize);
  console.log("In Layout Size", size);
  return (
    <Grid container sx={{ height: "100vh", overflowY: "auto" }}>
      <Grid size={{ xs: 12, sm: size.sm, md: size.md }}>
        <Sidebar />
      </Grid>

      <Grid size={{ xs: 12, sm: 12 - size.sm, md: 12 - size.md }}>
        <Header />
        <Stack
          component="main"
          sx={{
            backgroundColor: "background.default",
            height: "91vh",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AppLayout;
