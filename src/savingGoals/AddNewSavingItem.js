/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Card, CardContent, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const initialInputs = { monthNeeded: 'January', yearNeeded: '2023' };
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const years = ['2023', '2024', '2025'];

const AddNewSavingItem = ({ setSavingItems, setTableData }) => {
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
    setTableData((prev) => {
      const monthToUpdate = prev.find((obj) => {
        return obj.month === `${inputs.monthNeeded} ${inputs.yearNeeded}`;
      });

      monthToUpdate.withdrawn += Number(inputs.itemAmount);

      return [...prev];
    });
  };

  const handleIsAddingClick = () => {
    setIsAdding(!isAdding);
  };

  return isAdding ? (
    <Box sx={{ minWidth: 275, width: '20%', margin: '0 1rem' }}>
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <label style={{ display: 'block' }}>
              Item:
              <input
                type="text"
                name="itemToSaveFor"
                value={inputs.itemToSaveFor || ''}
                onChange={handleChange}
              />
            </label>

            <label style={{ display: 'block' }}>
              Amount:
              <input
                type="number"
                name="itemAmount"
                value={inputs.itemAmount || ''}
                onChange={handleChange}
              />
            </label>

            <label style={{ display: 'block' }}>
              Month:
              <select name="monthNeeded" onChange={handleChange} value={inputs.monthNeeded || ''}>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ display: 'block' }}>
              Year:
              <select name="yearNeeded" onChange={handleChange} value={inputs.yearNeeded || ''}>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
            <input type="submit" value="Add" />
          </form>
          <Fab color="primary" aria-label="Confirm" size="small" onClick={handleIsAddingClick}>
            <CloseIcon />
          </Fab>
        </CardContent>
      </Card>
    </Box>
  ) : (
    <Fab color="primary" aria-label="Confirm" size="small" onClick={handleIsAddingClick}>
      <AddIcon />
    </Fab>
  );
};

export default AddNewSavingItem;
