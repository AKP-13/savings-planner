/* eslint-disable react/prop-types */
import React from 'react';
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
import { formattedCurrency } from '../utils/helpers';

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

export default function SavingsProjectionsTable({ tableData, totalSaved }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StickyCell />
            {tableData.map(({ month }) => (
              <TableCell key={month} sx={{ minWidth: '115px' }}>
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
            {tableData.map(({ month, savingGoals }) => (
              // Mapping over the months
              <TableCell key={`${month}-withdrawn`} sx={{ verticalAlign: 'baseline' }}>
                {savingGoals.map(({ itemToSaveFor, itemAmount }) => (
                  // Mapping over the savingGoals in the month
                  <div key={`${itemToSaveFor}-${itemAmount}`}>
                    <p style={{ margin: '0' }}>
                      {`-${formattedCurrency.format(itemAmount)}`}
                      <span
                        style={{
                          color: 'grey',
                          fontSize: '10px',
                          margin: '0'
                        }}>{` ${itemToSaveFor}`}</span>
                    </p>
                  </div>
                ))}
                {
                  // If more than 1 goal, sum the total and display as Total
                  savingGoals.length > 1 && (
                    <p
                      style={{
                        borderTop: '1px solid black',
                        fontWeight: 'bold',
                        margin: '0'
                      }}>
                      {`-${formattedCurrency.format(
                        savingGoals.reduce((acc, curr) => {
                          return acc + curr.itemAmount;
                        }, 0)
                      )}`}
                      <span
                        style={{
                          color: 'grey',
                          fontSize: '10px',
                          margin: '0',
                          fontWeight: 'bold'
                        }}>{` Total`}</span>
                    </p>
                  )
                }
              </TableCell>
            ))}
          </StyledTableRow>

          <StyledTableRow key="Total">
            <StickyCell component="th" scope="row">
              Total
            </StickyCell>
            {totalSaved.map(({ month, total }) => (
              <TableCell
                sx={{ color: total === 0 ? 'grey' : total < 0 ? 'red' : 'green' }}
                key={`${month}-total`}>{`${formattedCurrency.format(total)}`}</TableCell>
            ))}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
