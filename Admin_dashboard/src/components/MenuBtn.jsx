import { IconButton } from "@mui/material";
import React from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleLayout } from "../redux/slices/layout.slice";

const MenuBtn = () => {
  const toggle = useSelector((state) => state.layout.isToggle);
  console.log("toggle in menu btn", toggle);
  const dispatch = useDispatch();
  return (
    <IconButton
      onClick={() => dispatch(handleToggleLayout())}
      sx={{ backgroundColor: "custom.bg" }}
    >
      <MenuOpenIcon fontSize="medium" sx={{ color: "custom.icon" }} />
    </IconButton>
  );
};

export default MenuBtn;
