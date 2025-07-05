import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { addAlert } from '../redux/slices/alert.slice';

const AlertForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    date: '',
    description: '',
    photo: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlert = {
      id: Date.now(),
      ...form,
      photoUrl: form.photo ? URL.createObjectURL(form.photo) : null,
    };
    dispatch(addAlert(newAlert));
    alert('Alert submitted');
    setForm({ date: '', description: '', photo: null });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Report Device Issue</Typography>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Issue Description"
            fullWidth
            multiline
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" component="label">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setForm({ ...form, photo: e.target.files[0] })
              }
            />
          </Button>
          {form.photo && (
            <Typography mt={1}>Uploaded: {form.photo.name}</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit Alert
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AlertForm;
