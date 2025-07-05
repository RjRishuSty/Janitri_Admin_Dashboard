import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const AMCExportBtn = () => {
  const contracts = useSelector((state) => state.amcTracker.contracts);

  const handleExport = () => {
    if (!contracts.length) return;

    const headers = Object.keys(contracts[0]).join(",");
    const rows = contracts.map((c) =>
      Object.values(c).map((v) => `"${v}"`).join(",")
    );
    const csv = [headers, ...rows].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "amc-contracts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleExport}
      variant="contained"
      startIcon={<DownloadIcon />}
      sx={{ mt: 2 }}
    >
      Export AMC Report
    </Button>
  );
};

export default AMCExportBtn;
