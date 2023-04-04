/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeSavingItem, updateWithdrawnAmount } from './helpers';

const SavingItems = ({ savingItems, tableData, setTableData, setSavingItems }) => {
  const deleteItem = ({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => {
    const method = 'subtract';

    const updatedTableData = updateWithdrawnAmount({
      itemAmount,
      method,
      monthNeeded,
      tableData,
      yearNeeded
    });

    setTableData(updatedTableData);

    const updatedSavingsItems = removeSavingItem({
      itemAmount,
      itemToSaveFor,
      monthNeeded,
      savingItems,
      yearNeeded
    });

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
