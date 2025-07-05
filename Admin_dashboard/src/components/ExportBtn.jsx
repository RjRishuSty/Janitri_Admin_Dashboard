import React from "react";
import { Button, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { deviceData } from "../constants/deviceData";

const ExportBtn = () => {
  const handleExport = () => {
    if (!deviceData || deviceData.length === 0) return;

    // Get CSV headers from object keys
    const headers = Object.keys(deviceData[0]).join(",");

    // Get CSV rows
    const rows = deviceData.map(row =>
      Object.values(row).map(value => `"${value}"`).join(",")
    );

    const csvContent = [headers, ...rows].join("\n");

    // Create and download CSV file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "device-data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Grid item xs={12} sm={2} md={2}>
      <Button
        onClick={handleExport}
        variant="contained"
        fullWidth
        size="large"
        startIcon={<DownloadIcon />}
        sx={{
          fontWeight: "bold",
          backgroundColor: "custom.icon",
          color: "custom.bg",
        }}
      >
        Export CSV
      </Button>
    </Grid>
  );
};

export default ExportBtn;
