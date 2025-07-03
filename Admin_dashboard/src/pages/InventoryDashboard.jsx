import React from "react";
import { Box, Grid } from "@mui/material";
// import { saveAs } from "file-saver";
import { deviceData } from "../constants/deviceData";
import Cards from "../components/Cards";
import DevicesIcon from "@mui/icons-material/Devices";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import TableSection from "../components/TableSection";
import FilterSection from "../components/FilterSection";

const statusColor = {
  Online: "success",
  Offline: "error",
  Maintenance: "warning",
};

const InventoryDashboard = () => {
  // Summary Stats
  const totalDevices = deviceData.length;
  const onlineDevices = deviceData.filter((d) => d.status === "Online").length;
  const upcomingService = deviceData.filter((d) => {
    const serviceDate = new Date(d.lastService);
    const now = new Date();
    const diffDays = (now - serviceDate) / (1000 * 60 * 60 * 24);
    return diffDays > 300; // example logic
  }).length;

  const summaryCard = [
    {
      label: "Total Devices",
      data: totalDevices,
      icon: <DevicesIcon sx={{ fontSize: "3.5rem", color: "custom.icon" }} />,
    },
    {
      label: "Online Devices",
      data: `${((onlineDevices / totalDevices) * 100).toFixed(0)}%`,
      icon: (
        <OnlinePredictionIcon
          sx={{ fontSize: "3.5rem", color: "custom.icon" }}
        />
      ),
    },
    {
      label: "Upcoming Services",
      data: upcomingService,
      icon: (
        <EventAvailableIcon sx={{ fontSize: "3.5rem", color: "custom.icon" }} />
      ),
    },
  ];

  return (
    <Box sx={{ p: 2, height: "100%" }}>
      {/* Summary Cards */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {summaryCard.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Cards item={item} />
          </Grid>
        ))}
      </Grid>

      {/* Filter Inputs */}
      <FilterSection />

      {/* Device Table */}
      <TableSection statusColor={statusColor} />
    </Box>
  );
};

export default InventoryDashboard;
