import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { sidebarLinks } from "../constants/sidebarLinks";
import {  useDispatch, useSelector } from "react-redux";
import {  flexCenter } from "../styles/custom.style";
import Logo from "./Logo";
import { handleCloseSidebar } from "../redux/slices/layout.slice";

const Sidebar = () => {
  const isToggle = useSelector((state) => state.layout.isToggle);
  const location = useLocation();
  const isActive = location.pathname;
  const dispatch = useDispatch()
  const isMobile = useMediaQuery(`(max-width:600px)`);

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        height: "100%",
        borderRight: "1px solid #ccc",
        // p:1
      }}
    >
      
<Logo/>
      <List sx={{ mt: 2 }}>
        {sidebarLinks.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={()=> dispatch(handleCloseSidebar(false))}
            component={NavLink}
            to={item.path}
            sx={{
              ...(isToggle && flexCenter),
              backgroundColor:
                isActive === item.path ? "custom.isActive" : "secondary.main",
            }}
          >
            <IconButton sx={{ backgroundColor: "custom.bg", mr: 2 }}>
              {item.icon}
            </IconButton>
            {!isToggle || isMobile ?(
              <ListItemText
                primary={item.label}
                sx={{ color: "text.primary", letterSpacing: 0.7 }}
              />
            ):""}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
