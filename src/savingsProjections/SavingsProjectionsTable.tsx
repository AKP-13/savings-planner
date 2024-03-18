import React, { FunctionComponent } from 'react';
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
import { SavingGoal, SavingItem, TotalAmount } from './styles';
import { TableData, TotalSaved } from '../types';

const StickyCell = styled(TableCell)(() => ({
  background: 'white',
  fontWeight: 'bold',
  left: 0,
  position: 'sticky'
}));

const StyledTableRow = styled(TableRow)(() => ({
  [`&:last-child td, &:last-child th`]: {
    border: 0
  }
}));

const StyledTable = styled(Table)(() => ({
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  minWidth: 650
}));

const TotalCell = styled(TableCell)(({ color }) => ({
  color: color,
  fontWeight: 'bold'
}));

interface Props {
  tableData: TableData;
  totalSaved: TotalSaved;
}

const SavingsProjectionsTable: FunctionComponent<Props> = ({ tableData, totalSaved }) => (
  <TableContainer
    component={Paper}
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '8px',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 5px',
      margin: '3rem',
      overflow: 'auto',
      width: 'auto'
    }}>
    <StyledTable aria-label="a dense table" size="small">
      <TableHead>
        <TableRow>
          <StickyCell />

          {tableData.map(({ month }) => (
            <TableCell key={month} sx={{ minWidth: '115px', fontWeight: 'bold' }}>
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
            <TableCell
              key={`${month}-saved`}
              sx={{ fontWeight: 'bold', color: '#00DFA2' }}>{`+${formattedCurrency.format(
              saved
            )}`}</TableCell>
          ))}
        </StyledTableRow>

        <StyledTableRow key="Withdrawn">
          <StickyCell component="th" scope="row">
            Withdrawn
          </StickyCell>
          {tableData.map(({ month, savingGoals }) => (
            // Mapping over the months
            <TableCell
              key={`${month}-withdrawn`}
              sx={{ verticalAlign: 'baseline', color: '#EB4444' }}>
              {savingGoals.map(({ itemToSaveFor, itemAmount }) => (
                // Mapping over the savingGoals in the month
                <div key={`${itemToSaveFor}-${itemAmount}`}>
                  <SavingGoal>
                    {`-${formattedCurrency.format(Number(itemAmount))}`}
                    <SavingItem>{` ${itemToSaveFor}`}</SavingItem>
                  </SavingGoal>
                </div>
              ))}

              {savingGoals.length > 1 && (
                <TotalAmount>
                  {`-${formattedCurrency.format(
                    savingGoals.reduce((acc, curr) => acc + Number(curr.itemAmount), 0)
                  )}`}
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
                total === 0 ? 'grey' : total < 0 ? '#EB4444' : '#00DFA2'
              }>{`${formattedCurrency.format(total)}`}</TotalCell>
          ))}
        </StyledTableRow>
      </TableBody>
    </StyledTable>
  </TableContainer>
);

export default SavingsProjectionsTable;
