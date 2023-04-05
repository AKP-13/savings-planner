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
import { updateWithdrawnAmount } from './helpers';

const initialInputs = { monthNeeded: '', yearNeeded: '', itemToSaveFor: '', itemAmount: '' };

const AddNewSavingItem = ({ setSavingItems, setTableData, tableData }) => {
  const [formInputs, setFormInputs] = useState(initialInputs);
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;

    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCloseAddNewItem = () => {
    setIsAddingNewItem(false);
  };

  const handleSaveNewItem = (event) => {
    event.preventDefault();
    setSavingItems((values) => [...values, { ...formInputs }]);
    setFormInputs(initialInputs);

    const { itemAmount, monthNeeded, yearNeeded } = formInputs;

    const updatedTableData = updateWithdrawnAmount({
      itemAmount,
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
    <Box sx={{ minWidth: 275, margin: '0 1rem', width: '300px' }}>
      <Card variant="outlined">
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            label="Item to save for"
            onChange={handleFormInputChange}
            value={formInputs.itemToSaveFor}
            name="itemToSaveFor"
            size="small"
            InputLabelProps={{
              shrink: true
            }}
          />

          <FormControl fullWidth sx={{ margin: '0.75rem 0 0 0' }}>
            <InputLabel htmlFor="amount">Amount</InputLabel>
            <OutlinedInput
              id="amount"
              startAdornment={<InputAdornment position="start">£</InputAdornment>}
              label="Amount"
              value={formInputs.itemAmount}
              onChange={handleFormInputChange}
              name="itemAmount"
              size="small"
            />
          </FormControl>

          <div style={{ margin: '0.75rem 0', display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              select
              label="Month"
              name="monthNeeded"
              value={formInputs.monthNeeded}
              onChange={handleFormInputChange}
              sx={{ width: '56%' }}
              size="small"
              InputLabelProps={{
                shrink: true
              }}>
              {MONTHS.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Year"
              name="yearNeeded"
              value={formInputs.yearNeeded}
              onChange={handleFormInputChange}
              sx={{ width: '40%' }}
              size="small"
              InputLabelProps={{
                shrink: true
              }}>
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              color="error"
              variant="outlined"
              startIcon={<CloseIcon />}
              onClick={handleCloseAddNewItem}
              size="small">
              Cancel
            </Button>

            <Button
              color="success"
              variant="outlined"
              startIcon={<CheckIcon />}
              disabled={isDisabled}
              onClick={handleSaveNewItem}
              size="small">
              Confirm
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  ) : (
    <div style={{ display: 'flex', width: '300px', margin: '0 1rem' }}>
      <Fab
        aria-label="Add"
        color="primary"
        size="small"
        onClick={handleAddNewItem}
        sx={{ margin: 'auto 8rem' }}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddNewSavingItem;
