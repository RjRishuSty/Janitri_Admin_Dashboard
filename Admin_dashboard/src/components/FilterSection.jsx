import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DownloadIcon from "@mui/icons-material/Download";
import { filterFields } from "../constants/filterInput";
import {
  filterByAmcStatus,
  filterByStatus,
  filterBybattery,
  filterByfacility,
} from "../redux/slices/filter.slice";
import { flexStartwithCenter } from "../styles/custom.style";

const FilterSection = () => {
  const filterState = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const actionMap = {
    amcStatus: filterByAmcStatus,
    status: filterByStatus,
    battery: filterBybattery,
    facility: filterByfacility,
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: 2, p: 1, ...flexStartwithCenter }}
    >
      <Typography
        variant="body1"
        sx={{ color: "text.primary", fontWeight: "bold", mr: 2 }}
      >
        Filter By:
      </Typography>

      {filterFields.map((item, index) => (
        <Grid key={index} size={{ xs: 12, sm: 2, md: 2 }} md={2}>
          <TextField
            fullWidth
            select
            label={item.label}
            size="small"
            value={filterState[item.id] || ""}
            onChange={(e) => dispatch(actionMap[item.id](e.target.value))}
          >
            {item.options.map((option, index) => (
              <MenuItem key={index} value={option.value || option}>
                {option.label || option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      ))}

      <Grid size={{ xs: 12, sm: 2, md: 2 }} md={2}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          startIcon={<DownloadIcon />}
          sx={{
            fontWeight: "bold",
            backgroundColor: "text.primary",
            color: "text.secondary",
          }}
        >
          Export CSV
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterSection;
