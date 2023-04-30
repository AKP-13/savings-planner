import React, { ChangeEventHandler, FunctionComponent, useState } from 'react';
import { Button, IconButton, Input, InputAdornment, styled, Tooltip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  Bold,
  ConfirmContainer,
  Container,
  EditingContainer,
  IssuesExplanation,
  IssuesTitle,
  PoundSign,
  SavingsAmount,
  SavingsAmountContainer,
  Title
} from './styles';
import { SetTableData, TableData, TotalSaved } from '../types';
import { returnMonthsWithNegativeTotals, returnGoalsWithIssues } from './helpers';

const StyledInput = styled(Input)`
  color: dodgerblue;
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

const SavingAmountButton = styled(Button)`
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

const startAdornment = (
  <InputAdornment position="start">
    <PoundSign>£</PoundSign>
  </InputAdornment>
);

interface Props {
  setTableData: SetTableData;
  tableData: TableData;
  totalSaved: TotalSaved;
}

const MonthlySavingAmount: FunctionComponent<Props> = ({ tableData, setTableData, totalSaved }) => {
  const [monthlySavingAmount, setMonthlySavingAmount] = useState(500);
  const [input, setInput] = useState(500);
  const [isEditing, setIsEditing] = useState(false);

  const isConfirmDisabled = input === monthlySavingAmount;

  const monthsWithNegativeTotalValues = returnMonthsWithNegativeTotals({ totalSaved });

  const goalsWithIssues = returnGoalsWithIssues({ monthsWithNegativeTotalValues, tableData });

  const numberOfIssues = goalsWithIssues.length;

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(Number(value));
  };

  const handleConfirm = () => {
    const newVal = Number(input);
    setMonthlySavingAmount(newVal);

    const newTableData = tableData.map((monthConfig) => ({
      ...monthConfig,
      saved: newVal
    }));

    setTableData(newTableData);

    handleCancel();
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      <Title>Monthly Saving Amount</Title>
      <SavingsAmountContainer>
        <SavingsAmount>Each month I can save:</SavingsAmount>
        {isEditing ? (
          <EditingContainer>
            <StyledInput
              name="amountSavedEachMonth"
              onChange={handleChange}
              startAdornment={startAdornment}
              type="number"
              value={input}
            />

            <Tooltip placement="right-start" title="Confirm">
              <ConfirmContainer>
                <IconButton
                  aria-label="confirm"
                  color="success"
                  disabled={isConfirmDisabled}
                  onClick={handleConfirm}>
                  <CheckIcon />
                </IconButton>
              </ConfirmContainer>
            </Tooltip>

            <Tooltip placement="right-start" title="Cancel">
              <IconButton aria-label="cancel" color="error" onClick={handleCancel}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </EditingContainer>
        ) : (
          <Tooltip placement="right-start" title="Edit">
            <SavingAmountButton onClick={handleClick} size="large" variant="text">
              {`£${monthlySavingAmount}`}
            </SavingAmountButton>
          </Tooltip>
        )}
      </SavingsAmountContainer>

      {numberOfIssues > 0 && (
        <div>
          <IssuesTitle>
            {numberOfIssues} Issue{numberOfIssues === 1 ? '' : 's'}
          </IssuesTitle>

          <IssuesExplanation>
            Based on your monthly saving amount and saving goals, you won&apos;t have enough for:
          </IssuesExplanation>

          {goalsWithIssues.map(({ month, goal }: { month: string; goal: string }) => (
            <IssuesExplanation key={`${month}-${goal}`}>
              <Bold>{goal}</Bold> in <Bold>{month}</Bold>
            </IssuesExplanation>
          ))}
        </div>
      )}
    </Container>
  );
};

export default MonthlySavingAmount;
