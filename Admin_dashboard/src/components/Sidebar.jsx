import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { sidebarLinks } from "../constants/sidebarLinks";
import { useSelector } from "react-redux";
import { flexCenter } from "../styles/custom.style";

const Sidebar = () => {
  const isToggle = useSelector((state) => state.layout.isToggle);
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        height: "100%",
        borderRight: "1px solid #ccc",
        // p:1
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          pt: 2,
          color: "text.primary",
          borderBottom: "1px solid #ccc",
          pb: 2,
        }}
      >
        Janitri Medical
      </Typography>
      <List sx={{ mt: 2 }}>
        {sidebarLinks.map((item, index) => (
          <ListItemButton
            key={index}
            component={NavLink}
            to={item.path}
            sx={{ ...(isToggle && flexCenter) }}
          >
            <IconButton sx={{ backgroundColor: "custom.bg", mr: 2 }}>
              {item.icon}
            </IconButton>
            {!isToggle && (
              <ListItemText
                primary={item.label}
                sx={{ color: "text.primary" }}
              />
            )}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
