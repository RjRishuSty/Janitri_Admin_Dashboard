import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import ThemeMode from "./ThemeMode";
import MenuBtn from "./MenuBtn";
import { flexBetween } from "../styles/custom.style";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.main",
        borderBottom: "1px solid #ccc",
        boxShadow: "none",
      }}
    >
      <Toolbar >
        <Box sx={{...flexBetween,width:'100%'}}>
            <MenuBtn/>
        </Box>
        <ThemeMode />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
