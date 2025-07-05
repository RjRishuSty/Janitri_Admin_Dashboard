import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectInput = ({ formData, item, actionMap, useIn = "filter", handleChange }) => {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);

  // Prevent crash
  if (!item || !item.id) {
    console.error("SelectInput received undefined 'item' prop");
    return null;
  }

  const value =
    useIn === "input"
      ? formData?.[item.id] || ""
      : filterState?.[item.id] || "";

  const handleSelectChange = (e) => {
    if (useIn === "input") {
      const fakeEvent = {
        ...e,
        target: {
          ...e.target,
          id: item.id,
        },
      };
      handleChange(fakeEvent);
    } else {
      dispatch(actionMap[item.id](e.target.value));
    }
  };

  return (
    <TextField
      fullWidth
      select
      label={item.label}
      size={useIn === "input" ? "large" : "small"}
      value={value}
      onChange={handleSelectChange}
    >
      {item.options.map((option, index) => (
        <MenuItem key={index} value={option.value || option}>
          {option.label || option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInput;
