/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { returnSortedSavingItems, updateSavingItems } from './helpers';
import { formattedCurrency } from '../utils/helpers';

const Container = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
`;

const InfoText = styled.p`
  width: 100%;
`;

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
    <Container>
      {sortedSavingItems.length > 0 ? (
        sortedSavingItems.map(({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => {
          return (
            <Box
              key={`${itemToSaveFor}-${itemAmount}-${monthNeeded}-${yearNeeded}`}
              sx={{ minWidth: 225, margin: '0 1rem', textAlign: 'left' }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    component="div"
                    sx={{ fontFamily: 'Quicksand, sans-serif' }}
                    variant="h5">
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
                    color="text.secondary"
                    sx={{ fontFamily: 'Quicksand, sans-serif' }}
                    variant="body2">
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
        <InfoText>You have no Saving Goals. Add some by clicking the + icon.</InfoText>
      )}
    </Container>
  );
};

export default SavingItems;
