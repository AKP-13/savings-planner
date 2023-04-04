/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Card, CardContent, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { updateWithdrawnAmount } from './helpers';
import { MONTHS, YEARS } from '../utils/constants';

const initialInputs = { monthNeeded: 'January', yearNeeded: '2023' };

const AddNewSavingItem = ({ setSavingItems, setTableData, tableData }) => {
  const [inputs, setInputs] = useState(initialInputs);

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
  };

  const isDisabled =
    !inputs.itemToSaveFor ||
    inputs.itemToSaveFor === '' ||
    !inputs.itemAmount ||
    !inputs.itemAmount;

  return (
    <Box sx={{ minWidth: 275, margin: '0 1rem' }}>
      <Card variant="outlined">
        <CardContent>
          <label style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            Item:
            <input
              type="text"
              name="itemToSaveFor"
              value={inputs.itemToSaveFor || ''}
              onChange={handleChange}
            />
          </label>

          <label style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            Amount:
            <input
              type="number"
              name="itemAmount"
              value={inputs.itemAmount || ''}
              onChange={handleChange}
            />
          </label>

          <label style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            Month:
            <select name="monthNeeded" onChange={handleChange} value={inputs.monthNeeded || ''}>
              {MONTHS.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            Year:
            <select name="yearNeeded" onChange={handleChange} value={inputs.yearNeeded || ''}>
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
          <Fab
            color="success"
            aria-label="Confirm"
            size="small"
            onClick={handleSubmit}
            disabled={isDisabled}>
            <AddIcon />
          </Fab>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddNewSavingItem;
