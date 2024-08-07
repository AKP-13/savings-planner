import React, {
  ChangeEventHandler,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState
} from 'react';
import { Button, IconButton, Input, InputAdornment, styled, Tooltip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  Bold,
  ConfirmContainer,
  EditingContainer,
  IssuesExplanation,
  ExplanationText,
  PoundSign,
  SavingsAmount,
  SavingsAmountContainer
} from './styles';
import { Container } from '../globalStyles';
import { SetTableData, TableData, TotalSaved } from '../types';
import { returnGoalsWithIssues } from './helpers';
import { initialMonthlySavingAmount } from '../utils/constants';

const StyledInput = styled(Input)`
  color: #0079ff;
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
`;

const SavingAmountButton = styled(Button)`
  font-family: Kaushan Script, cursive;
  font-size: 2rem;
  color: #0079ff;
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
  monthlySavingAmount: number;
  setMonthlySavingAmount: Dispatch<SetStateAction<number>>;
}

const MonthlySavingAmount: FunctionComponent<Props> = ({
  tableData,
  setTableData,
  totalSaved,
  monthlySavingAmount,
  setMonthlySavingAmount
}) => {
  const [input, setInput] = useState(initialMonthlySavingAmount);
  const [isEditing, setIsEditing] = useState(false);

  const isConfirmDisabled = input === monthlySavingAmount;

  const goalsWithIssues = returnGoalsWithIssues({
    tableData,
    totalSaved
  });

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
    <Container $margin="1rem 1rem 1rem 0" $width="33%">
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

      {numberOfIssues > 0 ? (
        <div>
          <ExplanationText $type="error">
            {numberOfIssues} Issue{numberOfIssues === 1 ? '' : 's'}
          </ExplanationText>

          <IssuesExplanation>
            Based on your monthly saving amount and saving goals, you won&apos;t have enough for:
          </IssuesExplanation>

          {goalsWithIssues.map(({ month, goal }: { month: string; goal: string }) => (
            <IssuesExplanation key={`${month}-${goal}`}>
              <Bold>{goal}</Bold> in <Bold>{month}</Bold>
            </IssuesExplanation>
          ))}
        </div>
      ) : (
        <div>
          <ExplanationText>
            No issues. Looks like you&apos;ll have enough savings for all of your goals!
          </ExplanationText>
        </div>
      )}
    </Container>
  );
};

export default MonthlySavingAmount;
