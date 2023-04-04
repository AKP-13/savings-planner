/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const SavingItems = ({ savingItems }) => (
  <div style={{ display: 'flex', overflow: 'auto' }}>
    {savingItems.length > 0 &&
      savingItems.map(({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => {
        return (
          <Box
            key={`${itemToSaveFor}-${itemAmount}-${monthNeeded}-${yearNeeded}`}
            sx={{ minWidth: 275, width: '20%' }}>
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
            </Card>
          </Box>
        );
      })}
  </div>
);

export default SavingItems;
