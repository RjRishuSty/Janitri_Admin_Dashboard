import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, useMediaQuery } from "@mui/material";
import ThemeMode from "./ThemeMode";
import MenuBtn from "./MenuBtn";
import { flexBetween } from "../styles/custom.style";

const Header = () => {
  const isMobile = useMediaQuery(`(max-width:600px)`);
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.main",
        borderBottom: isMobile?"":"1px solid #ccc",
        boxShadow: isMobile?"10px 5px 5px #000":"none",
        py:1
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
