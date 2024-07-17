import React, {
  ChangeEventHandler,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState
} from 'react';
import {
  IconButton,
  Input,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from '@mui/material';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
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

const SavedCell = styled(TableCell)(() => ({
  '&:hover': {
    border: `1px solid #919EAB`,
    cursor: 'pointer',
    fontWeight: '800'
  }
}));

interface Props {
  setTableData: Dispatch<SetStateAction<TableData>>;
  tableData: TableData;
  totalSaved: TotalSaved;
}

const SavingsProjectionsTable: FunctionComponent<Props> = ({
  setTableData,
  tableData,
  totalSaved
}) => {
  const [selectedCell, setSelectedCell] = useState({
    month: '',
    oldAmountSaved: NaN,
    newAmountSaved: NaN
  });
  const [inputMonthlySaving, setInputMonthlySaving] = useState(NaN);

  const handleMonthlySaving: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInputMonthlySaving(Number(value));
  };

  const handleUpdateSavedAmount = ({
    month,
    inputMonthlySaving
  }: {
    month: string;
    inputMonthlySaving: number;
  }) => {
    const newTableData = [...tableData];
    const monthIndexToUpdate = newTableData.findIndex((monthObj) => monthObj.month === month);
    newTableData[monthIndexToUpdate].saved = inputMonthlySaving;
    setTableData(newTableData);
    setSelectedCell({ month: '', oldAmountSaved: NaN, newAmountSaved: NaN });
    setInputMonthlySaving(NaN);
  };

  return (
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

            {tableData.map(({ month, saved }) =>
              selectedCell.month === month ? (
                <td key={`${month}-${saved}`}>
                  <Input
                    sx={{ width: '50%' }}
                    placeholder={`${selectedCell.oldAmountSaved}`}
                    inputProps={{ 'aria-label': 'description' }}
                    onChange={handleMonthlySaving}
                    value={inputMonthlySaving}
                  />
                  <Tooltip title="Cancel">
                    <IconButton
                      aria-label="cancel"
                      onClick={() =>
                        setSelectedCell({ month: '', oldAmountSaved: NaN, newAmountSaved: NaN })
                      }>
                      <CancelTwoToneIcon fontSize="small" color="error" sx={{ padding: '0' }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Confirm">
                    <IconButton
                      aria-label="confirm"
                      onClick={() => {
                        handleUpdateSavedAmount({ month, inputMonthlySaving });
                      }}>
                      <CheckCircleTwoToneIcon
                        fontSize="small"
                        color="success"
                        sx={{ padding: '0' }}
                      />
                    </IconButton>
                  </Tooltip>
                </td>
              ) : (
                <SavedCell
                  key={`${month}-saved`}
                  onClick={() => {
                    setInputMonthlySaving(saved);
                    setSelectedCell({ month, oldAmountSaved: saved, newAmountSaved: NaN });
                  }}
                  sx={{ fontWeight: 'bold', color: '#00DFA2' }}>{`+${formattedCurrency.format(
                  saved
                )}`}</SavedCell>
              )
            )}
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
};

export default SavingsProjectionsTable;
