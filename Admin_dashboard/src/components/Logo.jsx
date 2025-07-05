import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { handleCloseSidebar } from "../redux/slices/layout.slice";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { flexBetween } from "../styles/custom.style";
const Logo = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(`(max-width:600px)`);
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "1px solid #ccc",
        ...flexBetween,
        px: 1,
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          fontWeight: "bold",
          pt: 2,
          color: "text.primary",
          pb: 2,
        }}
      >
        Janitri Medical
      </Typography>
      {isMobile && (
        <IconButton
          sx={{ backgroundColor: "custom.bg" }}
          onClick={() => dispatch(handleCloseSidebar(false))}
        >
          <CloseIcon fontSize="medium" sx={{ color: "custom.icon" }} />
        </IconButton>
      )}
    </Box>
  );
};

export default Logo;
