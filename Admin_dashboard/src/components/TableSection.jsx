import {
  Chip,
  Table,
  TableBody,
  TableCell,
  Paper,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { deviceData } from "../constants/deviceData";

const TableSection = ({ statusColor }) => {
  
  const filter = useSelector((state) => state.filter);

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(8);
  // filter
  const filteredData = useMemo(() => {
    return deviceData.filter((item) => {
      const matchAMC = !filter.amcStatus || item.amcStatus === filter.amcStatus;
      const matchStatus = !filter.status || item.status === filter.status;
      const matchFacility =
        !filter.facility || item.facility === filter.facility;

      const matchBattery =
        !filter.battery ||
        (filter.battery === "30" && item.battery < 30) ||
        (filter.battery === "30-60" &&
          item.battery >= 30 &&
          item.battery <= 60) ||
        (filter.battery === "60" && item.battery > 60);

      return matchAMC && matchStatus && matchFacility && matchBattery;
    });
  }, [filter]);
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead sx={{ backgroundColor: "custom.isActive" }}>
          <TableRow>
            <TableCell>Device ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Facility</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Battery</TableCell>
            <TableCell>Last Service</TableCell>
            <TableCell>AMC/CMC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((device,index) => (
              <TableRow key={device.id} sx={{backgroundColor: index % 2 === 0 ? "primary.bg" : "background.default"}}>
                <TableCell>{device.id}</TableCell>
                <TableCell>{device.type}</TableCell>
                <TableCell>{device.facility}</TableCell>
                <TableCell>
                  <Chip
                    label={device.status}
                    color={statusColor[device.status]}
                    size="small"
                  />
                </TableCell>
                <TableCell>{device.battery}%</TableCell>
                <TableCell>{device.lastService}</TableCell>
                <TableCell>
                  <Chip
                    label={device.amcStatus}
                    color={device.amcStatus === "Active" ? "success" : "error"}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
      sx={{backgroundColor:'custom.isActive'}}
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[8]}
      />
    </TableContainer>
  );
};

export default TableSection;
