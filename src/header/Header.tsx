import React, {
  ChangeEventHandler,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState
} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Title } from './styles';
import { StyledTextField } from '../savingGoals/AddNewSavingItem';
import { Button, MenuItem } from '@mui/material';
import { MONTHS, YEARS } from '../utils/constants';
import { TableData } from '../types';
import { ButtonContainer } from '../savingGoals/styles';

interface Props {
  monthlySavingAmount: number;
  tableData: TableData;
  setTableData: Dispatch<SetStateAction<TableData>>;
  forecastYear: string;
  setForecastYear: Dispatch<SetStateAction<string>>;
}

const initialState = {
  isVisible: false,
  message: '',
  newTableData: [],
  newForecastYear: ''
};

const Header: FunctionComponent<Props> = ({
  tableData,
  setTableData,
  monthlySavingAmount,
  forecastYear,
  setForecastYear
}) => {
  const [confirmationState, setConfirmationState] = useState<{
    isVisible: boolean;
    message: string;
    newTableData: TableData;
    newForecastYear: string;
  }>(initialState);

  const handleForecastYearsChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const { value: newForecastYear } = e.target;

    if (newForecastYear > forecastYear) {
      const yearsNeededToAdd = YEARS.filter(
        (year) => year > forecastYear && year <= newForecastYear
      );

      const dataToAppend = yearsNeededToAdd.flatMap((year) =>
        MONTHS.flatMap((month) => ({
          month: `${month} ${year}`,
          saved: monthlySavingAmount,
          savingGoals: []
        }))
      );

      const newTableData = tableData.concat(dataToAppend);

      setForecastYear(newForecastYear);
      setTableData(newTableData);
      setConfirmationState(initialState);
    } else if (newForecastYear < forecastYear) {
      const newTableData = tableData.filter((data) => data.month.split(' ')[1] <= newForecastYear);

      const dataToBeRemoved = tableData.filter(
        (data) => data.month.split(' ')[1] > newForecastYear
      );

      const savingItemsToBeRemoved = dataToBeRemoved.flatMap((month) => month.savingGoals);

      if (savingItemsToBeRemoved.length === 0) {
        setForecastYear(newForecastYear);
        setTableData(newTableData);
      } else {
        setConfirmationState({
          isVisible: true,
          message: `Are you sure? Doing so will delete ${
            savingItemsToBeRemoved.length
          } saving goal${
            savingItemsToBeRemoved.length > 1 ? 's' : ''
          } you had set up for after ${newForecastYear} such as ${
            savingItemsToBeRemoved[0].itemToSaveFor
          } in ${savingItemsToBeRemoved[0].monthNeeded} ${savingItemsToBeRemoved[0].yearNeeded}`,
          newTableData,
          newForecastYear
        });
      }
    }
  };

  const handleConfirm = () => {
    setForecastYear(confirmationState.newForecastYear);
    setTableData(confirmationState.newTableData);
    setConfirmationState({ isVisible: false, message: '', newTableData: [], newForecastYear: '' });
  };

  const handleCancel = () => {
    setConfirmationState({ isVisible: false, message: '', newTableData: [], newForecastYear: '' });
  };

  return (
    <header className="App-header">
      <Title>Savings Planner</Title>

      <div style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
        <StyledTextField
          InputLabelProps={{
            shrink: true
          }}
          label="Until"
          name="yearUntil"
          onChange={handleForecastYearsChange}
          select
          size="small"
          value={forecastYear}>
          {YEARS.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </StyledTextField>

        <p style={{ fontSize: '1rem' }}>{confirmationState.message}</p>

        {confirmationState.isVisible && (
          <ButtonContainer>
            <Button
              color="error"
              size="small"
              startIcon={<CloseIcon />}
              onClick={handleCancel}
              variant="outlined">
              Cancel
            </Button>

            <Button
              color="success"
              onClick={handleConfirm}
              size="small"
              startIcon={<CheckIcon />}
              variant="outlined">
              Confirm
            </Button>
          </ButtonContainer>
        )}
      </div>
    </header>
  );
};

export default Header;
