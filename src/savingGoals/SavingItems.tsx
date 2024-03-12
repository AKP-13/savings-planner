/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { Box, Card, CardActions, CardContent, styled, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { returnSortedSavingItems, updateSavingItems } from './helpers';
import { formattedCurrency } from '../utils/helpers';
// Styles
import { CardContainer, InfoText } from './styles';
import { SetTableData, TableData } from '../types';

const StyledBox = styled(Box)({
  minWidth: 225,
  margin: '0 1rem',
  textAlign: 'left'
});

const StyledTypography = styled(Typography)({
  fontFamily: 'Quicksand, sans-serif'
});

const SavingItems = ({
  tableData,
  setTableData
}: {
  tableData: TableData;
  setTableData: SetTableData;
}) => {
  const deleteItem = ({
    itemToSaveFor,
    itemAmount,
    monthNeeded,
    yearNeeded
  }: {
    itemToSaveFor: string;
    itemAmount: string;
    monthNeeded: string;
    yearNeeded: string;
  }) => {
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

  const sortedSavingItems = useMemo(() => returnSortedSavingItems({ tableData }), [tableData]);

  return (
    <CardContainer style={{ alignItems: 'center' }}>
      {sortedSavingItems.length > 0 ? (
        sortedSavingItems.map(({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => (
          <StyledBox key={`${itemToSaveFor}-${itemAmount}-${monthNeeded}-${yearNeeded}`}>
            <Card variant="outlined">
              <CardContent>
                <StyledTypography variant="h5">{itemToSaveFor}</StyledTypography>

                <StyledTypography sx={{ mb: 1.5 }}>
                  {formattedCurrency.format(Number(itemAmount))}
                </StyledTypography>

                <StyledTypography color="text.secondary" variant="body2">
                  {monthNeeded} {yearNeeded}
                </StyledTypography>
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
          </StyledBox>
        ))
      ) : (
        <InfoText>You have no Saving Goals. Add some by clicking the + icon.</InfoText>
      )}
    </CardContainer>
  );
};

export default SavingItems;
