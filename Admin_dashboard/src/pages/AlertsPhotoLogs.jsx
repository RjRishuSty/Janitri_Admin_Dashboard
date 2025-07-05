import React from 'react';
import AlertForm from '../components/AlertForm';
import AlertTable from '../components/AlertTable';
import { Box, Typography } from '@mui/material';

const AlertsPhotoLogs = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Alerts & Photo Logs
      </Typography>
      <AlertForm />
      <AlertTable />
    </Box>
  );
};

export default AlertsPhotoLogs;
