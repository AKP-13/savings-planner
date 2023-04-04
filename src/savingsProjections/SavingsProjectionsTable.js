/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { formattedCurrency, returnTotals } from './helpers';

export default function SavingsProjectionsTable({ tableData }) {
  const totalSaved = useMemo(() => returnTotals({ tableData }), [tableData]);

  const StickyCell = styled(TableCell)(() => ({
    position: 'sticky',
    left: 0,
    background: 'white'
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    [`&:last-child td, &:last-child th`]: {
      border: 0
    }
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StickyCell />
            {tableData.map(({ month }) => (
              <TableCell key={month} sx={{ minWidth: '100px' }}>
                {month}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key="Saved">
            <StickyCell component="th" scope="row">
              Saved
            </StickyCell>
            {tableData.map(({ month, saved }) => (
              <TableCell key={`${month}-saved`}>{`+${formattedCurrency.format(saved)}`}</TableCell>
            ))}
          </StyledTableRow>

          <StyledTableRow key="Withdrawn">
            <StickyCell component="th" scope="row">
              Withdrawn
            </StickyCell>
            {tableData.map(({ month, withdrawn }) => (
              <TableCell key={`${month}-withdrawn`}>
                {withdrawn === 0 ? '' : `-${formattedCurrency.format(withdrawn)}`}
              </TableCell>
            ))}
          </StyledTableRow>

          <StyledTableRow key="Total">
            <StickyCell component="th" scope="row">
              Total
            </StickyCell>
            {totalSaved.map(({ month, amount }) => (
              <TableCell
                sx={{ backgroundColor: amount === 0 ? 'grey' : amount < 0 ? 'red' : 'green' }}
                key={`${month}-total`}>{`${formattedCurrency.format(amount)}`}</TableCell>
            ))}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
