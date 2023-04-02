/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Tooltip, Fab } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const MonthlySavingCard = ({ tableData, setTableData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [amountSavedEachMonth, setAmountSavedEachMonth] = useState(500);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleAmountSavedEachMonthChange = (event) => {
    const { value } = event.target;

    setAmountSavedEachMonth(Number(value));
  };

  const handleAmountSavedEachMonthSubmit = (event) => {
    event.preventDefault();
    const newTableData = tableData.map((monthConfig) => {
      return {
        ...monthConfig,
        saved: amountSavedEachMonth
      };
    });

    setTableData(newTableData);

    setIsEditing(false);
  };

  return (
    <Box sx={{ minWidth: 275, width: '20%' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            I can save
          </Typography>

          {isEditing ? (
            <div>
              <input
                type="number"
                name="amountSavedEachMonth"
                value={amountSavedEachMonth || 0}
                onChange={handleAmountSavedEachMonthChange}
              />
              <Fab
                color="primary"
                aria-label="Confirm"
                size="small"
                onClick={handleAmountSavedEachMonthSubmit}>
                <CheckIcon />
              </Fab>
            </div>
          ) : (
            <Tooltip title="Edit" placement="right-start">
              <Button variant="text" size="large" onClick={handleClick}>
                {`£${amountSavedEachMonth}`}
              </Button>
            </Tooltip>
          )}

          <Typography variant="h5" component="div">
            each month
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MonthlySavingCard;
