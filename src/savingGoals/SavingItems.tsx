import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  styled,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { returnSortedSavingItems, updateSavingItems } from './helpers';
import { formattedCurrency } from '../utils/helpers';
// Styles
import { ButtonContainer, CardContainer, DateContainer, InfoText } from './styles';
import { SetTableData, TableData } from '../types';
import { MONTHS, YEARS } from '../utils/constants';

const StyledBox = styled(Box)(({ editing }: { editing?: 'true' }) => ({
  minWidth: 235,
  margin: editing ? '0 5.5rem 0 0' : '0 0.5rem'
}));

const StyledTypography = styled(Typography)({
  fontFamily: 'Quicksand, sans-serif'
});

const CardContainerDupe = styled(Box)({
  minWidth: 300,
  margin: '0 1rem',
  width: '300px'
});

const ContentDupe = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column'
});

const AmountContainerDupe = styled(FormControl)({
  margin: '0.75rem 0 0 0'
});

const StyledTextFieldDupe = styled(TextField)(({ width }: { width: string }) => ({
  width: width
}));

type GoalBeingEdited = {
  itemToSaveFor: string;
  itemAmount: string;
  monthNeeded: string;
  yearNeeded: string;
};

const goalBeingEditedDefault = {
  itemToSaveFor: '',
  itemAmount: '',
  monthNeeded: '',
  yearNeeded: ''
};

const initialInputs = { monthNeeded: '', yearNeeded: '', itemToSaveFor: '', itemAmount: '' };

const SavingItems = ({
  tableData,
  setTableData
}: {
  tableData: TableData;
  setTableData: SetTableData;
}) => {
  const [goalBeingEdited, setGoalBeingEdited] = useState<GoalBeingEdited>(goalBeingEditedDefault);
  const [formInputs, setFormInputs] = useState(initialInputs);

  const handleFormInputChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCancel = () => {
    setGoalBeingEdited(goalBeingEditedDefault);
  };

  const handleBeginEdit = ({
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
    setGoalBeingEdited({
      itemToSaveFor,
      itemAmount,
      monthNeeded,
      yearNeeded
    });

    setFormInputs({
      itemToSaveFor,
      itemAmount,
      monthNeeded,
      yearNeeded
    });
  };

  const handleConfirmEdit = () => {
    const newTableData = [...tableData];

    const monthIndexToUpdate = newTableData.findIndex(
      (monthYearObj) =>
        monthYearObj.month === `${goalBeingEdited.monthNeeded} ${goalBeingEdited.yearNeeded}`
    );

    const savingIndexToUpdate = newTableData[monthIndexToUpdate].savingGoals.findIndex(
      (goal) =>
        goal.itemToSaveFor === goalBeingEdited.itemToSaveFor &&
        goal.itemAmount === goalBeingEdited.itemAmount &&
        goal.monthNeeded === goalBeingEdited.monthNeeded &&
        goal.yearNeeded === goalBeingEdited.yearNeeded
    );

    newTableData[monthIndexToUpdate].savingGoals[savingIndexToUpdate] = {
      itemToSaveFor: formInputs.itemToSaveFor,
      itemAmount: formInputs.itemAmount,
      monthNeeded: formInputs.monthNeeded,
      yearNeeded: formInputs.yearNeeded
    };

    setTableData(newTableData);
    handleCancel();
  };

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
          <div key={`${itemToSaveFor}-${itemAmount}-${monthNeeded}-${yearNeeded}`}>
            {goalBeingEdited.itemToSaveFor === itemToSaveFor &&
            goalBeingEdited.itemAmount === itemAmount &&
            goalBeingEdited.monthNeeded === monthNeeded &&
            goalBeingEdited.yearNeeded === yearNeeded ? (
              <StyledBox editing="true">
                <CardContainerDupe>
                  <Card variant="outlined">
                    <ContentDupe>
                      <TextField
                        InputLabelProps={{
                          shrink: true
                        }}
                        label="Item to save for"
                        name="itemToSaveFor"
                        onChange={handleFormInputChange}
                        size="small"
                        value={formInputs.itemToSaveFor}
                      />

                      <AmountContainerDupe fullWidth>
                        <InputLabel htmlFor="amount">Amount</InputLabel>
                        <OutlinedInput
                          id="amount"
                          label="Amount"
                          name="itemAmount"
                          onChange={handleFormInputChange}
                          size="small"
                          startAdornment={<InputAdornment position="start">£</InputAdornment>}
                          type="number"
                          value={formInputs.itemAmount}
                        />
                      </AmountContainerDupe>

                      <DateContainer>
                        <StyledTextFieldDupe
                          InputLabelProps={{
                            shrink: true
                          }}
                          label="Month"
                          name="monthNeeded"
                          onChange={handleFormInputChange}
                          select
                          size="small"
                          value={formInputs.monthNeeded}
                          width="56%">
                          {MONTHS.map((month) => (
                            <MenuItem key={month} value={month}>
                              {month}
                            </MenuItem>
                          ))}
                        </StyledTextFieldDupe>

                        <StyledTextFieldDupe
                          InputLabelProps={{
                            shrink: true
                          }}
                          label="Year"
                          name="yearNeeded"
                          onChange={handleFormInputChange}
                          select
                          size="small"
                          value={formInputs.yearNeeded}
                          width="40%">
                          {YEARS.map((year) => (
                            <MenuItem key={year} value={year}>
                              {year}
                            </MenuItem>
                          ))}
                        </StyledTextFieldDupe>
                      </DateContainer>

                      <ButtonContainer>
                        <Button
                          color="error"
                          size="small"
                          startIcon={<CloseIcon />}
                          onClick={handleCancel}
                          variant="outlined">
                          Cancel
                        </Button>

                        <Button
                          color="success"
                          //   disabled={isDisabled}
                          onClick={handleConfirmEdit}
                          size="small"
                          startIcon={<CheckIcon />}
                          variant="outlined">
                          Confirm
                        </Button>
                      </ButtonContainer>
                    </ContentDupe>
                  </Card>
                </CardContainerDupe>
              </StyledBox>
            ) : (
              <StyledBox>
                <Card variant="outlined">
                  <CardContent>
                    <StyledTypography color="text.secondary" variant="body2">
                      {monthNeeded} {yearNeeded}
                    </StyledTypography>

                    <StyledTypography sx={{ mb: 1.5 }}>
                      {formattedCurrency.format(Number(itemAmount))}
                    </StyledTypography>

                    <StyledTypography variant="h5">{itemToSaveFor}</StyledTypography>
                  </CardContent>

                  <CardActions disableSpacing sx={{ justifyContent: 'space-around' }}>
                    <Tooltip title="Delete">
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          deleteItem({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded })
                        }>
                        <DeleteTwoToneIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit">
                      <IconButton
                        aria-label="edit"
                        onClick={() =>
                          handleBeginEdit({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded })
                        }>
                        <EditTwoToneIcon />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </StyledBox>
            )}
          </div>

          //   <StyledBox key={`${itemToSaveFor}-${itemAmount}-${monthNeeded}-${yearNeeded}`}>
          //     {goalBeingEdited.itemToSaveFor === itemToSaveFor &&
          //     goalBeingEdited.itemAmount === itemAmount &&
          //     goalBeingEdited.monthNeeded === monthNeeded &&
          //     goalBeingEdited.yearNeeded === yearNeeded ? (
          //       // COPIED, MAKE REUSABLE
          //       <>
          //         <CardContainerDupe>
          //           <Card variant="outlined">
          //             <ContentDupe>
          //               <TextField
          //                 InputLabelProps={{
          //                   shrink: true
          //                 }}
          //                 label="Item to save for"
          //                 name="itemToSaveFor"
          //                 onChange={handleFormInputChange}
          //                 size="small"
          //                 value={formInputs.itemToSaveFor}
          //               />

          //               <AmountContainerDupe fullWidth>
          //                 <InputLabel htmlFor="amount">Amount</InputLabel>
          //                 <OutlinedInput
          //                   id="amount"
          //                   label="Amount"
          //                   name="itemAmount"
          //                   onChange={handleFormInputChange}
          //                   size="small"
          //                   startAdornment={<InputAdornment position="start">£</InputAdornment>}
          //                   type="number"
          //                   value={formInputs.itemAmount}
          //                 />
          //               </AmountContainerDupe>

          //               <DateContainer>
          //                 <StyledTextFieldDupe
          //                   InputLabelProps={{
          //                     shrink: true
          //                   }}
          //                   label="Month"
          //                   name="monthNeeded"
          //                   onChange={handleFormInputChange}
          //                   select
          //                   size="small"
          //                   value={formInputs.monthNeeded}
          //                   width="56%">
          //                   {MONTHS.map((month) => (
          //                     <MenuItem key={month} value={month}>
          //                       {month}
          //                     </MenuItem>
          //                   ))}
          //                 </StyledTextFieldDupe>

          //                 <StyledTextFieldDupe
          //                   InputLabelProps={{
          //                     shrink: true
          //                   }}
          //                   label="Year"
          //                   name="yearNeeded"
          //                   onChange={handleFormInputChange}
          //                   select
          //                   size="small"
          //                   value={formInputs.yearNeeded}
          //                   width="40%">
          //                   {YEARS.map((year) => (
          //                     <MenuItem key={year} value={year}>
          //                       {year}
          //                     </MenuItem>
          //                   ))}
          //                 </StyledTextFieldDupe>
          //               </DateContainer>

          //               <ButtonContainer>
          //                 <Button
          //                   color="error"
          //                   size="small"
          //                   startIcon={<CloseIcon />}
          //                   onClick={handleCancel}
          //                   variant="outlined">
          //                   Cancel
          //                 </Button>

          //                 <Button
          //                   color="success"
          //                   //   disabled={isDisabled}
          //                   onClick={() => {
          //                     console.log('we wanna update these figures');
          //                   }}
          //                   size="small"
          //                   startIcon={<CheckIcon />}
          //                   variant="outlined">
          //                   Confirm
          //                 </Button>
          //               </ButtonContainer>
          //             </ContentDupe>
          //           </Card>
          //         </CardContainerDupe>
          //       </>
          //     ) : (
          //       <Card variant="outlined">
          //         <CardContent>
          //           <StyledTypography color="text.secondary" variant="body2">
          //             {monthNeeded} {yearNeeded}
          //           </StyledTypography>

          //           <StyledTypography sx={{ mb: 1.5 }}>
          //             {formattedCurrency.format(Number(itemAmount))}
          //           </StyledTypography>

          //           <StyledTypography variant="h5">{itemToSaveFor}</StyledTypography>
          //         </CardContent>

          //         <CardActions disableSpacing sx={{ justifyContent: 'space-around' }}>
          //           <Tooltip title="Delete">
          //             <IconButton
          //               aria-label="delete"
          //               onClick={() =>
          //                 deleteItem({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded })
          //               }>
          //               <DeleteTwoToneIcon />
          //             </IconButton>
          //           </Tooltip>

          //           <Tooltip title="Edit">
          //             <IconButton
          //               aria-label="edit"
          //               onClick={() =>
          //                 handleEdit({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded })
          //               }>
          //               <EditTwoToneIcon />
          //             </IconButton>
          //           </Tooltip>
          //         </CardActions>
          //       </Card>
          //     )}
          //   </StyledBox>
        ))
      ) : (
        <InfoText>You have no Saving Goals. Add some by clicking the + icon.</InfoText>
      )}
    </CardContainer>
  );
};

export default SavingItems;
