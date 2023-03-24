import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columns = [
  'January 2023',
  'February 2023',
  'March 2023',
  'April 2023',
  'May 2023',
  'June 2023',
  'July 2023',
  'August 2023',
  'September 2023',
  'October 2023',
  'November 2023',
  'December 2023'
];

export default function SavingsProjectionsTable() {
  const saved = [
    { month: 'January 2023', amount: 100 },
    { month: 'February 2023', amount: 100 },
    { month: 'March 2023', amount: 100 },
    { month: 'April 2023', amount: 300 },
    { month: 'May 2023', amount: 100 },
    { month: 'June 2023', amount: 100 },
    { month: 'July 2023', amount: 100 },
    { month: 'August 2023', amount: 100 },
    { month: 'September 2023', amount: 100 },
    { month: 'October 2023', amount: 100 },
    { month: 'November 2023', amount: 100 },
    { month: 'December 2023', amount: 100 }
  ];

  const withdrawn = [
    { month: 'January 2023', amount: 0 },
    { month: 'February 2023', amount: 0 },
    { month: 'March 2023', amount: 100 },
    { month: 'April 2023', amount: 0 },
    { month: 'May 2023', amount: 0 },
    { month: 'June 2023', amount: 0 },
    { month: 'July 2023', amount: 50 },
    { month: 'August 2023', amount: 0 },
    { month: 'September 2023', amount: 0 },
    { month: 'October 2023', amount: 0 },
    { month: 'November 2023', amount: 200 },
    { month: 'December 2023', amount: 0 }
  ];

  const total = [
    { month: 'January 2023', amount: 100 },
    { month: 'February 2023', amount: 200 },
    { month: 'March 2023', amount: 200 },
    { month: 'April 2023', amount: 500 },
    { month: 'May 2023', amount: 600 },
    { month: 'June 2023', amount: 700 },
    { month: 'July 2023', amount: 750 },
    { month: 'August 2023', amount: 850 },
    { month: 'September 2023', amount: 950 },
    { month: 'October 2023', amount: 1050 },
    { month: 'November 2023', amount: 950 },
    { month: 'December 2023', amount: 1050 }
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell />
            {columns.map((col) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="Saved" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Saved
            </TableCell>
            {columns.map((col) => {
              const value = saved.find((obj) => obj.month === col).amount;
              return <TableCell key={col}>{value}</TableCell>;
            })}
          </TableRow>
          <TableRow key="Withdrawn" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Withdrawn
            </TableCell>
            {columns.map((col) => {
              const value = withdrawn.find((obj) => obj.month === col).amount;
              return <TableCell key={col}>{value}</TableCell>;
            })}
          </TableRow>
          <TableRow key="Total" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            {columns.map((col) => {
              const value = total.find((obj) => obj.month === col).amount;
              return <TableCell key={col}>{value}</TableCell>;
            })}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
