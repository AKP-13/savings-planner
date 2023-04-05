/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Card, CardContent, Fab, MenuItem, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { updateWithdrawnAmount } from './helpers';
import { MONTHS, YEARS } from '../utils/constants';

const initialInputs = { monthNeeded: '', yearNeeded: '', itemToSaveFor: '', itemAmount: '' };

const AddNewSavingItem = ({ setSavingItems, setTableData, tableData }) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [isAdding, setIsAdding] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavingItems((values) => [...values, { ...inputs }]);
    setInputs(initialInputs);

    const { itemAmount, monthNeeded, yearNeeded } = inputs;

    const updatedTableData = updateWithdrawnAmount({
      itemAmount,
      method: 'add',
      monthNeeded,
      tableData,
      yearNeeded
    });

    setTableData(updatedTableData);
    setIsAdding(false);
  };

  // TO DO
  // Also disable when adding a duplicate item
  const isDisabled = inputs.itemToSaveFor === '' || inputs.itemAmount === '';

  const handleAddNewItem = () => {
    setIsAdding(true);
  };

  const handleClose = () => {
    setIsAdding(false);
  };

  return isAdding ? (
    <Box sx={{ minWidth: 275, margin: '0 1rem' }}>
      <Card variant="outlined">
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            id="standard-basic"
            label="Item"
            variant="standard"
            onChange={handleChange}
            value={inputs.itemToSaveFor}
            name="itemToSaveFor"
          />

          <TextField
            id="standard-number"
            label="Amount"
            name="itemAmount"
            type="number"
            onChange={handleChange}
            variant="standard"
            value={inputs.itemAmount}
          />

          <TextField
            id="standard-select-month"
            select
            label="Month"
            defaultValue="January"
            variant="standard"
            name="monthNeeded"
            value={inputs.monthNeeded}
            onChange={handleChange}>
            {MONTHS.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="standard-select-year"
            select
            label="Year"
            defaultValue="2023"
            variant="standard"
            name="yearNeeded"
            onChange={handleChange}
            value={inputs.yearNeeded}>
            {YEARS.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>

          <div>
            <Fab
              color="success"
              aria-label="Confirm"
              size="small"
              onClick={handleSubmit}
              disabled={isDisabled}
              sx={{ margin: '1rem auto 0' }}>
              <CheckIcon />
            </Fab>
            <Fab
              color="error"
              aria-label="Close"
              size="small"
              onClick={handleClose}
              sx={{ margin: '1rem auto 0' }}>
              <CloseIcon />
            </Fab>
          </div>
        </CardContent>
      </Card>
    </Box>
  ) : (
    <Fab aria-label="Add" size="small" onClick={handleAddNewItem} sx={{ margin: 'auto 8rem' }}>
      <AddIcon />
    </Fab>
  );
};

export default AddNewSavingItem;
