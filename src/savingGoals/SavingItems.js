/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const SavingItems = ({ savingItems, tableData, setTableData, setSavingItems }) => {
  const deleteItem = ({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => {
    const updatedTableData = tableData.map((monthObj) => {
      if (monthObj.month === `${monthNeeded} ${yearNeeded}`) {
        return {
          ...monthObj,
          withdrawn: monthObj.withdrawn - Number(itemAmount)
        };
      } else {
        return { ...monthObj };
      }
    });

    setTableData(updatedTableData);

    const updatedSavingsItems = savingItems.filter(
      (item) =>
        item.itemAmount !== itemAmount ||
        item.itemToSaveFor !== itemToSaveFor ||
        item.monthNeeded !== monthNeeded ||
        item.yearNeeded !== yearNeeded
    );

    setSavingItems(updatedSavingsItems);
  };

  return (
    <div style={{ display: 'flex', overflow: 'auto' }}>
      {savingItems.length > 0 &&
        savingItems.map(({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => {
          return (
            <Box
              key={`${itemToSaveFor}-${itemAmount}-${monthNeeded}-${yearNeeded}`}
              sx={{ minWidth: 275, margin: '0 1rem' }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {itemToSaveFor}
                  </Typography>

                  <Typography variant="h5" component="div">
                    {`£${itemAmount}`}
                  </Typography>

                  <Typography variant="h5" component="div">
                    {monthNeeded} {yearNeeded}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="delete"
                    onClick={() =>
                      deleteItem({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded })
                    }>
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Box>
          );
        })}
    </div>
  );
};

export default SavingItems;
