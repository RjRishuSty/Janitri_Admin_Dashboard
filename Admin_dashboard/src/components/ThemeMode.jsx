import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleAppTheme } from "../redux/slices/theme.slice";

const ThemeMode = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <IconButton sx={{backgroundColor:'custom.bg'}} onClick={() => dispatch(toggleAppTheme())}>
      {mode === "light" ? (
        <LightModeIcon fontSize="medium" sx={{ color: "custom.icon" }} />
      ) : (
        <NightlightIcon fontSize="medium" sx={{ color: "custom.icon" }} />
      )}
    </IconButton>
  );
};

export default ThemeMode;
