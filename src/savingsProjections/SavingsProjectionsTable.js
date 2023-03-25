import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const columns = [
  { month: 'January 2023', saved: 100, withdrawn: 0 },
  { month: 'February 2023', saved: 100, withdrawn: 0 },
  { month: 'March 2023', saved: 100, withdrawn: 100 },
  { month: 'April 2023', saved: 300, withdrawn: 0 },
  { month: 'May 2023', saved: 100, withdrawn: 0 },
  { month: 'June 2023', saved: 100, withdrawn: 0 },
  { month: 'July 2023', saved: 100, withdrawn: 50 },
  { month: 'August 2023', saved: 100, withdrawn: 0 },
  { month: 'September 2023', saved: 100, withdrawn: 0 },
  { month: 'October 2023', saved: 100, withdrawn: 0 },
  { month: 'November 2023', saved: 100, withdrawn: 200 },
  { month: 'December 2023', saved: 100, withdrawn: 0 },
  { month: 'January 2024', saved: 100, withdrawn: 0 },
  { month: 'February 2024', saved: 100, withdrawn: 0 },
  { month: 'March 2024', saved: 100, withdrawn: 100 },
  { month: 'April 2024', saved: 300, withdrawn: 0 },
  { month: 'May 2024', saved: 100, withdrawn: 0 },
  { month: 'June 2024', saved: 100, withdrawn: 0 },
  { month: 'July 2024', saved: 100, withdrawn: 50 },
  { month: 'August 2024', saved: 100, withdrawn: 0 },
  { month: 'September 2024', saved: 100, withdrawn: 0 },
  { month: 'October 2024', saved: 100, withdrawn: 0 },
  { month: 'November 2024', saved: 100, withdrawn: 200 },
  { month: 'December 2024', saved: 100, withdrawn: 0 },
  { month: 'January 2025', saved: 100, withdrawn: 0 },
  { month: 'February 2025', saved: 100, withdrawn: 0 },
  { month: 'March 2025', saved: 100, withdrawn: 100 },
  { month: 'April 2025', saved: 300, withdrawn: 0 },
  { month: 'May 2025', saved: 100, withdrawn: 0 },
  { month: 'June 2025', saved: 100, withdrawn: 0 },
  { month: 'July 2025', saved: 100, withdrawn: 50 },
  { month: 'August 2025', saved: 100, withdrawn: 0 },
  { month: 'September 2025', saved: 100, withdrawn: 0 },
  { month: 'October 2025', saved: 100, withdrawn: 0 },
  { month: 'November 2025', saved: 100, withdrawn: 200 },
  { month: 'December 2025', saved: 100, withdrawn: 0 }
];

let accumulatedSaved = 0;
let accumulatedWithdrawn = 0;

const totalSaved = columns.map(({ month, saved, withdrawn }) => {
  accumulatedSaved += saved;
  accumulatedWithdrawn += withdrawn;

  const amount = accumulatedSaved - accumulatedWithdrawn;

  return { month, amount };
});

export default function SavingsProjectionsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell />
            {columns.map(({ month }) => (
              <TableCell key={month}>{month}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="Saved" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Saved
            </TableCell>
            {columns.map(({ month, saved }) => (
              <TableCell key={`${month}-saved`}>{saved}</TableCell>
            ))}
          </TableRow>

          <TableRow key="Withdrawn" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Withdrawn
            </TableCell>
            {columns.map(({ month, withdrawn }) => (
              <TableCell key={`${month}-withdrawn`}>{withdrawn}</TableCell>
            ))}
          </TableRow>

          <TableRow key="Total" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            {totalSaved.map(({ month, amount }) => (
              <TableCell key={`${month}-total`}>{amount}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
