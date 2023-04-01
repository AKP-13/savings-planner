/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { formattedCurrency, returnTotals } from './helpers';

export default function SavingsProjectionsTable({ tableData }) {
  const totalSaved = useMemo(() => returnTotals({ tableData }), [tableData]);

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
              <TableCell
                sx={{ backgroundColor: amount === 0 ? 'grey' : amount < 0 ? 'red' : 'green' }}
                key={`${month}-total`}>{`${formattedCurrency.format(amount)}`}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
