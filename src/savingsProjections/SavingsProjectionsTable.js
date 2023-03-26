/* eslint-disable react/prop-types */
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

export default function SavingsProjectionsTable({ tableData }) {
  let accumulatedSaved = 0;
  let accumulatedWithdrawn = 0;

  const totalSaved = tableData.map(({ month, saved, withdrawn }) => {
    accumulatedSaved += saved;
    accumulatedWithdrawn += withdrawn;

    const amount = accumulatedSaved - accumulatedWithdrawn;

    return { month, amount };
  });

  const formattedCurrency = new Intl.NumberFormat('en-GB', {
    currency: 'GBP',
    style: 'currency'
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell />
            {tableData.map(({ month }) => (
              <TableCell key={month} sx={{ minWidth: '100px' }}>
                {month}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="Saved" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Saved
            </TableCell>
            {tableData.map(({ month, saved }) => (
              <TableCell key={`${month}-saved`}>{`+${formattedCurrency.format(saved)}`}</TableCell>
            ))}
          </TableRow>

          <TableRow key="Withdrawn" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Withdrawn
            </TableCell>
            {tableData.map(({ month, withdrawn }) => (
              <TableCell key={`${month}-withdrawn`}>{`-${formattedCurrency.format(
                withdrawn
              )}`}</TableCell>
            ))}
          </TableRow>

          <TableRow key="Total" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            {totalSaved.map(({ month, amount }) => (
              <TableCell key={`${month}-total`}>{`${formattedCurrency.format(amount)}`}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
