/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { returnSortedSavingItems, updateSavingItems } from './helpers';
import { formattedCurrency } from '../utils/helpers';

const SavingItems = ({ tableData, setTableData }) => {
  const deleteItem = ({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => {
    const updatedTableData = updateSavingItems({
      itemAmount,
      itemToSaveFor,
      method: 'delete',
      monthNeeded,
      tableData,
      yearNeeded
    });

    setTableData(updatedTableData);
  };

  const sortedSavingItems = useMemo(() => returnSortedSavingItems(tableData), [tableData]);

  return (
    <div style={{ display: 'flex', overflow: 'auto', width: '100%' }}>
      {sortedSavingItems.length > 0 ? (
        sortedSavingItems.map(({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => {
          return (
            <Box
              key={`${itemToSaveFor}-${itemAmount}-${monthNeeded}-${yearNeeded}`}
              sx={{ minWidth: 225, margin: '0 1rem', textAlign: 'left' }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: 'Quicksand, sans-serif' }}>
                    {itemToSaveFor}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 1.5,
                      fontFamily: 'Quicksand, sans-serif'
                    }}>
                    {formattedCurrency.format(itemAmount)}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: 'Quicksand, sans-serif' }}
                    variant="body2"
                    color="text.secondary">
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
        })
      ) : (
        <p style={{ width: '100%' }}> You have no Saving Goals. Add some by clicking the + icon.</p>
      )}
    </div>
  );
};

export default SavingItems;
