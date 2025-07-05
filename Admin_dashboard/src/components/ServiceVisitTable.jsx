import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Link,
} from "@mui/material";

const ServiceVisitTable = () => {
  const visits = useSelector((state) => state.serviceVisit.visits);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Engineer</TableCell>
          <TableCell>Purpose</TableCell>
          <TableCell>Notes</TableCell>
          <TableCell>Attachment</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {visits.map((log) => (
          <TableRow key={log.id}>
            <TableCell>{log.date}</TableCell>
            <TableCell>{log.engineer}</TableCell>
            <TableCell>{log.purpose}</TableCell>
            <TableCell>{log.notes}</TableCell>
            <TableCell>
              {log.attachmentUrl ? (
                <Link href={log.attachmentUrl} target="_blank" rel="noopener">
                  {log.attachment?.type?.includes("image")
                    ? <Avatar src={log.attachmentUrl} />
                    : "Open PDF"}
                </Link>
              ) : (
                "No Attachment"
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ServiceVisitTable;
