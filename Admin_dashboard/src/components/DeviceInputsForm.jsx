import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { deviceInputs } from "../constants/deviceInputs";
import { flexCenter } from "../styles/custom.style";
import SelectInput from "./SelectInput";
import { handleAddDevice } from "../redux/slices/device.slice";
import { enqueueSnackbar } from "notistack";
import FileInputs from "./FileInputs";

const DeviceInputsForm = () => {
  const dispatch = useDispatch();
  const [allow, setAllow] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    deviceId: "",
    deviceName: "",
    installationPlace: "",
    battery: "",
    status: "",
    amcStatus: "",
    image: null,
  });
const installationField = deviceInputs.filter(
    (item) => item.section === "device"
  );
  const handleChange = (e) => {
    const { id, type, files, value } = e.target;

    const newValue = type === "file" ? files[0] : value;

    //* Handle preview
    if (type === "file" && files[0]) {
      setImagePreview(URL.createObjectURL(files[0]));
    }

    setFormData((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };

  const handleValidate = () => {
    if (!formData.deviceId) {
      enqueueSnackbar("Please enter the Device ID.", { variant: "error" });
      return false;
    }
    if (!formData.deviceName) {
      enqueueSnackbar("Please provide the Device Name.", { variant: "error" });
      return false;
    }
    if (!formData.installationPlace) {
      enqueueSnackbar("Installation location is required.", {
        variant: "error",
      });
      return false;
    }
    if (!formData.battery) {
      enqueueSnackbar("Please specify the Device Battery level.", {
        variant: "error",
      });
      return false;
    }
    if (!formData.amcStatus) {
      enqueueSnackbar("Please select the AMC Status.", { variant: "error" });
      return false;
    }
    if (!formData.status) {
      enqueueSnackbar("Please select the Device Status.", { variant: "error" });
      return false;
    }
    if (!allow) {
      enqueueSnackbar("Please check the box to allow adding a new device.", {
        variant: "error",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidate()) return;
    const newEntry = {
      ...formData,
      id: Date.now(),
    };

    dispatch(handleAddDevice(newEntry));
    enqueueSnackbar("Device installation details added successfully.", {
      variant: "success",
    });

    //* Reset the form field
    setFormData({
      deviceId: "",
      deviceName: "",
      installationPlace: "",
      battery: "",
      status: "",
      amcStatus: "",
      image: null,
    });
    setAllow(false);
    setImagePreview(null);
  };

  console.log(formData, "inInputForm");
  return (
    <Grid
      component="form"
      container
      rowSpacing={2}
      columnSpacing={3}
      onSubmit={handleSubmit}
      sx={{ padding: 2, mt: 2 }}
    >
      {installationField.map((item) => (
        <Grid
          size={{ xs: 12, sm: 12, md: item.type === "file" ? 12 : 6 }}
          key={item.id}
        >
          {item.type === "select" ? (
            <SelectInput
              formData={formData}
              item={item}
              useIn="input"
              handleChange={handleChange}
            />
          ) : item.type === "file" ? (
            <FileInputs
              formData={formData}
              item={item}
              imagePreview={imagePreview}
              handleChange={handleChange}
            />
          ) : (
            <TextField
              label={item.label}
              type={item.type}
              id={item.id}
              placeholder={item.placeholder}
              fullWidth
              value={formData[item.id] || ""}
              onChange={handleChange}
            />
          )}
        </Grid>
      ))}

      <Grid size={{ xs: 12, sm: 12, md: 7 }}>
        <FormControlLabel
          control={
            <Checkbox
              id="trainingDone"
              checked={allow}
              onClick={() => setAllow((prev) => !prev)}
              sx={{ color: "text.primary" }}
            />
          }
          label={
            <Typography sx={{ color: "text.primary" }}>
              Allow to add new device.
            </Typography>
          }
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{ ...flexCenter }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            fontWeight: "bold",
            backgroundColor: "custom.icon",
            color: "custom.bg",
          }}
        >
          Submit Installation
        </Button>
      </Grid>
    </Grid>
  );
};

export default DeviceInputsForm;
