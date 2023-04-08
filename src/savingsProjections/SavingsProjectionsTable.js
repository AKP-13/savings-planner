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
// Utils
import { formattedCurrency } from '../utils/helpers';
// Styles
import { SavingGoal, SavingItem, TotalAmount, TotalText } from './styles';

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

const StyledTable = styled(Table)(() => ({
  minWidth: 650
}));

const TotalCell = styled(TableCell)(({ color }) => ({
  color: color
}));

export default function SavingsProjectionsTable({ tableData, totalSaved }) {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="a dense table" size="small">
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
                    <SavingGoal>
                      {`-${formattedCurrency.format(itemAmount)}`}
                      <SavingItem>{` ${itemToSaveFor}`}</SavingItem>
                    </SavingGoal>
                  </div>
                ))}

                {savingGoals.length > 1 && (
                  <TotalAmount>
                    {`-${formattedCurrency.format(
                      savingGoals.reduce((acc, curr) => acc + curr.itemAmount, 0)
                    )}`}
                    <TotalText>{` Total`}</TotalText>
                  </TotalAmount>
                )}
              </TableCell>
            ))}
          </StyledTableRow>

          <StyledTableRow key="Total">
            <StickyCell component="th" scope="row">
              Total
            </StickyCell>

            {totalSaved.map(({ month, total }) => (
              <TotalCell
                key={`${month}-total`}
                color={
                  total === 0 ? 'grey' : total < 0 ? 'red' : 'green'
                }>{`${formattedCurrency.format(total)}`}</TotalCell>
            ))}
          </StyledTableRow>
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
