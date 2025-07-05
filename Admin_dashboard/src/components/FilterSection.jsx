import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { filterFields } from "../constants/filterInput";
import {
  filterByAmcStatus,
  filterByStatus,
  filterBybattery,
  filterByfacility,
} from "../redux/slices/filter.slice";
import { flexStartwithCenter } from "../styles/custom.style";
import ExportBtn from "./ExportBtn";
import SelectInput from "./SelectInput";

const FilterSection = () => {
  const actionMap = {
    amcStatus: filterByAmcStatus,
    status: filterByStatus,
    battery: filterBybattery,
    facility: filterByfacility,
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2, p: 1, ...flexStartwithCenter }}>
      <Typography
        variant="body1"
        sx={{ color: "text.primary", fontWeight: "bold", mr: 2 }}
      >
        Filter By:
      </Typography>

      {filterFields.map((item, index) => (
        <Grid key={index} size={{ xs: 12, sm: 2, md: 2 }} md={2}>
          <SelectInput useIn='filter' item={item} actionMap={actionMap} />
        </Grid>
      ))}

      <Grid size={{ xs: 12, sm: 2, md: 2 }} md={2}>
        <ExportBtn />
      </Grid>
    </Grid>
  );
};

export default FilterSection;
