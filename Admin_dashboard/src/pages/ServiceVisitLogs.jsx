import React from "react";
import { Box, Typography } from "@mui/material";
import { flexCenter } from "../styles/custom.style";
import ServiceVisitForm from "../components/ServiceVisitForm";
import ServiceVisitTable from "../components/ServiceVisitTable";

const ServiceVisitLogs = () => {
  return (
    <Box sx={{ padding: 2, ...flexCenter, flexDirection: "column", mt: 3 }}>
      <Typography
        gutterBottom
        variant="h5"
        fontWeight="bold"
        sx={{ color: "text.primary", textAlign: "center" }}
      >
        Service Visit Log Entry
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        fontWeight="medium"
        sx={{ color: "text.primary", textAlign: "center" }}
      >
        Record details of technician visits including service updates, device
        condition, and maintenance actions.
      </Typography>
      <ServiceVisitForm />

      <Box sx={{ width: "100%", mt: 5,  }}>
        <ServiceVisitTable />
      </Box>
    </Box>
  );
};

export default ServiceVisitLogs;
