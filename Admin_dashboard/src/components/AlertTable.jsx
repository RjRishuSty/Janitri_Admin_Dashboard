import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
} from '@mui/material';

const AlertTable = () => {
  const alerts = useSelector((state) => state.alert.alerts);

  return (
    <>
      <Typography variant="h6" mt={4}>
        Alert Logs
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alerts.map((alert) => (
            <TableRow key={alert.id}>
              <TableCell>{alert.date}</TableCell>
              <TableCell>{alert.description}</TableCell>
              <TableCell>
                {alert.photoUrl ? (
                  <Avatar src={alert.photoUrl} variant="rounded" />
                ) : (
                  'No Photo'
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AlertTable;
