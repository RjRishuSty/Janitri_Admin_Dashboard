import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Grid, Stack, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const size = useSelector((state) => state.layout.gridSize);
  const isToggle = useSelector((state) => state.layout.isToggle);
  const isMobile = useMediaQuery(`(max-width:600px)`);

  return (
    <Grid container sx={{ height: "100vh", overflowY: "auto" }}>
      <Grid
        size={{ xs: 10, sm: size.sm, md: size.md }}
        sx={{
          position: isMobile ? "absolute" : "relative",
          zIndex: isMobile ? 99 : 0,
          height:isMobile?"100vh":"auto",
          display:isToggle && isMobile?"block": !isMobile?"block":'none'
        }}
      >
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
