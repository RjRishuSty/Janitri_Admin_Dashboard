import { IconButton } from "@mui/material";
import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleLayout } from "../redux/slices/layout.slice";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MenuBtn = () => {
  const toggle = useSelector((state) => state.layout.isToggle);
  const dispatch = useDispatch();
  return (
    <IconButton
      onClick={() => dispatch(handleToggleLayout())}
      sx={{ backgroundColor: "custom.bg" }}
    >
      {toggle ? (
        <KeyboardArrowRightIcon
          fontSize="medium"
          sx={{ color: "custom.icon" }}
        />
      ) : (
        <MenuOpenIcon fontSize="medium" sx={{ color: "custom.icon" }} />
      )}
    </IconButton>
  );
};

export default MenuBtn;
