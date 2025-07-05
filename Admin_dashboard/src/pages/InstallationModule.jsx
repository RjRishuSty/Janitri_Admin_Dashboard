import React from "react";
import { Box, Typography } from "@mui/material";
import DeviceInputsForm from "../components/DeviceInputsForm";
import { flexCenter } from "../styles/custom.style";

const InstallationModule = () => {
  return (
    <Box sx={{ padding: 2,...flexCenter,flexDirection:'column',mt:3 }}>
      <Typography
        gutterBottom
        variant="h5"
        fontWeight="bold"
        sx={{ color: "text.primary", textAlign: "center" }}
      >
        ADD New Device Installation
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        sx={{ color: "text.primary", textAlign: "center" }}
      >
        Log and register a new medical device with installation details, image,
        and status.
      </Typography>
      <DeviceInputsForm />
    </Box>
  );
};

export default InstallationModule;
