/* eslint-disable react/prop-types */
import React, { FunctionComponent, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Fab,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  styled,
  TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { MONTHS, YEARS } from '../utils/constants';
import { updateSavingItems } from './helpers';
// Styles
import { AddContainer, ButtonContainer, DateContainer } from './styles';
import { TableData } from '../types';

const CardContainer = styled(Box)({
  minWidth: 300,
  margin: '0 1rem',
  width: '300px'
});

const Content = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column'
});

const AmountContainer = styled(FormControl)({
  margin: '0.75rem 0 0 0'
});

const StyledTextField = styled(TextField)(({ width }: { width: string }) => ({
  width: width
}));

const initialInputs = { monthNeeded: '', yearNeeded: '', itemToSaveFor: '', itemAmount: '' };

interface Props {
  tableData: TableData;
  setTableData: React.Dispatch<React.SetStateAction<TableData>>;
}

const AddNewSavingItem: FunctionComponent<Props> = ({ setTableData, tableData }) => {
  const [formInputs, setFormInputs] = useState(initialInputs);
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);

  // TO DO FIX THIS TYPE
  const handleFormInputChange = (event: { target: { name: string; value: any } }) => {
    const { name, value } = event.target;

    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCloseAddNewItem = () => {
    setIsAddingNewItem(false);
    setFormInputs(initialInputs);
  };

  const handleSaveNewItem: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setFormInputs(initialInputs);

    const { itemAmount, itemToSaveFor, monthNeeded, yearNeeded } = formInputs;

    const updatedTableData = updateSavingItems({
      itemAmount,
      itemToSaveFor,
      method: 'add',
      monthNeeded,
      tableData,
      yearNeeded
    });

    setTableData(updatedTableData);
    handleCloseAddNewItem();
  };

  // TO DO
  // Also disable when adding a duplicate item
  const isDisabled =
    formInputs.itemToSaveFor === '' ||
    formInputs.itemAmount === '' ||
    formInputs.monthNeeded === '' ||
    formInputs.yearNeeded === '';

  const handleAddNewItem = () => {
    setIsAddingNewItem(true);
  };

  return isAddingNewItem ? (
    <CardContainer>
      <Card variant="outlined">
        <Content>
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            label="Item to save for"
            name="itemToSaveFor"
            onChange={handleFormInputChange}
            size="small"
            value={formInputs.itemToSaveFor}
          />

          <AmountContainer fullWidth>
            <InputLabel htmlFor="amount">Amount</InputLabel>
            <OutlinedInput
              id="amount"
              label="Amount"
              name="itemAmount"
              onChange={handleFormInputChange}
              size="small"
              startAdornment={<InputAdornment position="start">£</InputAdornment>}
              value={formInputs.itemAmount}
            />
          </AmountContainer>

          <DateContainer>
            <StyledTextField
              InputLabelProps={{
                shrink: true
              }}
              label="Month"
              name="monthNeeded"
              onChange={handleFormInputChange}
              select
              size="small"
              value={formInputs.monthNeeded}
              width="56%">
              {MONTHS.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </StyledTextField>

            <StyledTextField
              InputLabelProps={{
                shrink: true
              }}
              label="Year"
              name="yearNeeded"
              onChange={handleFormInputChange}
              select
              size="small"
              value={formInputs.yearNeeded}
              width="40%">
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </StyledTextField>
          </DateContainer>

          <ButtonContainer>
            <Button
              color="error"
              size="small"
              startIcon={<CloseIcon />}
              onClick={handleCloseAddNewItem}
              variant="outlined">
              Cancel
            </Button>

            <Button
              color="success"
              disabled={isDisabled}
              onClick={handleSaveNewItem}
              size="small"
              startIcon={<CheckIcon />}
              variant="outlined">
              Confirm
            </Button>
          </ButtonContainer>
        </Content>
      </Card>
    </CardContainer>
  ) : (
    <AddContainer>
      <Fab aria-label="Add" color="primary" onClick={handleAddNewItem} size="small">
        <AddIcon />
      </Fab>
    </AddContainer>
  );
};

export default AddNewSavingItem;
