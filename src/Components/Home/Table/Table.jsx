import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

const createData = (message, severity, timestamp, statusCode, source) => {
  return { message, severity, timestamp, statusCode, source };
};

const rows = [
  createData(
    "Database connection timeout",
    "High",
    "2025-07-11 08:45:23",
    504,
    "Database Service"
  ),
  createData(
    "Unauthorized access attempt",
    "Medium",
    "2025-07-11 09:10:42",
    401,
    "Auth Gateway"
  ),
  createData(
    "API rate limit exceeded",
    "Low",
    "2025-07-11 10:03:17",
    429,
    "API Gateway"
  ),
  createData(
    "Disk space running low",
    "High",
    "2025-07-11 10:45:00",
    507,
    "Storage Service"
  ),
  createData(
    "Email delivery failed",
    "Low",
    "2025-07-11 11:12:51",
    550,
    "Notification Service"
  ),
  createData(
    "Payment gateway timeout",
    "High",
    "2025-07-11 12:30:12",
    504,
    "Payment Service"
  ),
  createData(
    "Missing environment variable",
    "Medium",
    "2025-07-11 13:00:00",
    500,
    "Backend Server"
  ),
  createData(
    "Invalid JWT token",
    "Medium",
    "2025-07-11 13:25:18",
    403,
    "Auth Service"
  ),
  createData(
    "User session expired",
    "Low",
    "2025-07-11 14:10:09",
    440,
    "Frontend App"
  ),
  createData(
    "Cache server not responding",
    "High",
    "2025-07-11 14:50:33",
    503,
    "Redis Cache"
  ),
];

const makeStyles = (severity) => {
  if (severity === "Low") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (severity === "High") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#ffd7003d",
      color: "#ffd700",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Error Logs</h3>

      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px rgba(0, 123, 255, 0.15)",
          background: "linear-gradient(135deg, #1f1c2c, #2d2c3e)",
          color: "#ffffff",
        }}
      >
        <Table
    sx={{
      minWidth: 750,
      "& td, & th": {
        color: "#ffffff", 
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      },
    }}
    aria-label="error log table"
  >
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Error Message</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Severity</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Timestamp</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Status Code</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Source</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.message}
                </TableCell>
                <TableCell align="left">
                  <span className="severity" style={makeStyles(row.severity)}>
                    {row.severity}
                  </span>
                </TableCell>
                <TableCell align="left">{row.timestamp}</TableCell>
                <TableCell align="left">{row.statusCode}</TableCell>
                <TableCell align="left" className="source">
                  {row.source}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
