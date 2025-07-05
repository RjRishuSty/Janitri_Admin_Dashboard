import React from "react";
import AMCTrackerTable from "../components/AMCTrackerTable";
import AMCExportBtn from "../components/AMCExportBtn";
import { Box, Typography } from "@mui/material";

const AMCTracker = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        AMC / CMC Tracker
      </Typography>
      <AMCTrackerTable />
      <AMCExportBtn />
    </Box>
  );
};

export default AMCTracker;
