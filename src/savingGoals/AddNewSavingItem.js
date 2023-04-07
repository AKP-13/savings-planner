/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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
  TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { MONTHS, YEARS } from '../utils/constants';
import { updateSavingItems } from './helpers';
// Styles
import { AddContainer, ButtonContainer, DateContainer } from './styles';

const initialInputs = { monthNeeded: '', yearNeeded: '', itemToSaveFor: '', itemAmount: '' };

const AddNewSavingItem = ({ setTableData, tableData }) => {
  const [formInputs, setFormInputs] = useState(initialInputs);
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;

    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCloseAddNewItem = () => {
    setIsAddingNewItem(false);
    setFormInputs(initialInputs);
  };

  const handleSaveNewItem = (event) => {
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
    <Box sx={{ minWidth: 300, margin: '0 1rem', width: '300px' }}>
      <Card variant="outlined">
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
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

          <FormControl fullWidth sx={{ margin: '0.75rem 0 0 0' }}>
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
          </FormControl>

          <DateContainer>
            <TextField
              InputLabelProps={{
                shrink: true
              }}
              label="Month"
              name="monthNeeded"
              onChange={handleFormInputChange}
              select
              size="small"
              sx={{ width: '56%' }}
              value={formInputs.monthNeeded}>
              {MONTHS.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              InputLabelProps={{
                shrink: true
              }}
              label="Year"
              name="yearNeeded"
              onChange={handleFormInputChange}
              select
              size="small"
              sx={{ width: '40%' }}
              value={formInputs.yearNeeded}>
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>
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
        </CardContent>
      </Card>
    </Box>
  ) : (
    <AddContainer>
      <Fab aria-label="Add" color="primary" onClick={handleAddNewItem} size="small">
        <AddIcon />
      </Fab>
    </AddContainer>
  );
};

export default AddNewSavingItem;
