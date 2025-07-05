import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { handleServiceVisitLog } from "../redux/slices/serviceVisit.slice";
import { deviceInputs } from "../constants/deviceInputs";
import { flexCenter } from "../styles/custom.style";
import FileInputs from "./FileInputs";
import { enqueueSnackbar } from "notistack";
import SelectInput from "./SelectInput";

const ServiceVisitForm = () => {
  const dispatch = useDispatch();
  const [allow, setAllow] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    engineer: "",
    purpose: "",
    visitNotes: "",
    attachment: null,
  });

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
    if (!formData.date) {
      enqueueSnackbar("Please enter the visit date.", { variant: "error" });
      return false;
    }
    if (!formData.engineer) {
      enqueueSnackbar("Please enter the responsible engineer's name.", {
        variant: "error",
      });
      return false;
    }
    if (!formData.purpose) {
      enqueueSnackbar("Please select the purpose of the visit.", {
        variant: "error",
      });
      return false;
    }
    if (!formData.visitNotes) {
      enqueueSnackbar("Please enter the visit notes or observations.", {
        variant: "error",
      });
      return false;
    }
    if (!allow) {
      enqueueSnackbar("Please confirm permission to log this service visit.", {
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

    dispatch(handleServiceVisitLog(newEntry));
    enqueueSnackbar("Service visit log submitted successfully.", {
      variant: "success",
    });

    //* Reset the form field
    setFormData({
      data: "",
      engineer: "",
      purpose: "",
      visitNotes: "",
      attachment: null,
    });
    setAllow(false);
    setImagePreview(null);
  };

  const serviceFields = deviceInputs.filter(
    (item) => item.section === "ServiceVisitLog"
  );
  console.log("service", formData);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {serviceFields.map((item, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 12,
              md:
                item.type === "text" ||
                item.type === "date" ||
                item.type === "select"
                  ? 4
                  : 12,
            }}
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
                fullWidth
                label={item.label}
                id={item.id}
                type={item.type}
                value={formData[item.id] || ""}
                onChange={handleChange}
                multiline={item.type === "textarea"}
                rows={item.type === "textarea" ? 5 : undefined}
                InputLabelProps={{ shrink: true }}
              />
            )}
          </Grid>
        ))}

        <Grid size={{ xs: 12 }}>
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
                Allow to add service visit log.
              </Typography>
            }
          />
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ ...flexCenter }}>
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
            Submit Service Visit Log
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceVisitForm;
