import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

const AMCTrackerTable = () => {
  const contracts = useSelector((state) => state.amcTracker.contracts);

  const today = dayjs();

  return (
    <>
      <Typography variant="h6" mb={2}>AMC/CMC Contracts</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Device ID</TableCell>
            <TableCell>Facility</TableCell>
            <TableCell>Contract Type</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((contract) => {
            const isExpired = today.isAfter(dayjs(contract.endDate));
            const isExpiringSoon = dayjs(contract.endDate).diff(today, 'day') <= 30;

            let status = "Active";
            if (isExpired) status = "Expired";
            else if (isExpiringSoon) status = "Expiring Soon";

            return (
              <TableRow key={contract.id}>
                <TableCell>{contract.deviceId}</TableCell>
                <TableCell>{contract.facility}</TableCell>
                <TableCell>{contract.type}</TableCell>
                <TableCell>{contract.startDate}</TableCell>
                <TableCell>{contract.endDate}</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default AMCTrackerTable;
