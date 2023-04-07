/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, IconButton, Input, InputAdornment, Tooltip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  margin: 1rem;
  padding: 0.5rem;
  width: 33%;
`;

const Title = styled.h2`
  margin: 0.5rem;
  font-weight: 400;
  text-align: left;
  text-decoration: underline;
`;

const SavingsAmountContainer = styled.div`
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: space-between;
`;

const SavingsAmount = styled.p`
  margin: 0.5rem;
  text-align: left;
  width: 50%;
`;

const EditingContainer = styled.div`
  display: flex;
  width: 50%;
`;

const PoundSign = styled.span`
  color: dodgerblue;
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

const StyledInput = styled(Input)`
  color: dodgerblue;
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

const ConfirmContainer = styled.span`
  align-self: center;
`;

const SavingAmountButton = styled(Button)`
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

const IssuesTitle = styled.h3`
  color: red;
  margin: 0.5rem;
  font-weight: 400;
  text-align: left;
  text-decoration: underline;
`;

const IssuesExplanation = styled.p`
  margin: 0.5rem;
  text-align: left;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const startAdornment = (
  <InputAdornment position="start">
    <PoundSign>£</PoundSign>
  </InputAdornment>
);

const MonthlySavingAmount = ({ tableData, setTableData, totalSaved }) => {
  const [monthlySavingAmount, setMonthlySavingAmount] = useState(500);
  const [input, setInput] = useState(500);
  const [isEditing, setIsEditing] = useState(false);

  const isConfirmDisabled = input === monthlySavingAmount;

  const monthsWithNegativeTotalValues = totalSaved.reduce((acc, curr) => {
    if (curr.total < 0) {
      return [...acc, curr.month];
    }
    return acc;
  }, []);

  const goalsWithIssues = monthsWithNegativeTotalValues.reduce((acc, curr) => {
    const [month, year] = curr.split(' ');

    // find the tableData object with this month
    const foundObj = tableData.find((monthObj) => {
      return monthObj.month === `${month} ${year}`;
    });

    if (foundObj.savingGoals.length > 0) {
      const goals = foundObj.savingGoals.map((obj) => ({ month: curr, goal: obj.itemToSaveFor }));
      return [...acc, ...goals];
    }

    return acc;
  }, []);

  const numberOfIssues = goalsWithIssues.length;

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(Number(value));
  };

  const handleConfirm = () => {
    const newVal = Number(input);
    setMonthlySavingAmount(newVal);

    const newTableData = tableData.map((monthConfig) => {
      return {
        ...monthConfig,
        saved: newVal
      };
    });

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
                  <CheckIcon size="small" />
                </IconButton>
              </ConfirmContainer>
            </Tooltip>

            <Tooltip placement="right-start" title="Cancel">
              <IconButton aria-label="cancel" color="error" onClick={handleCancel}>
                <CloseIcon size="small" />
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
          {goalsWithIssues.map(({ month, goal }) => (
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
