/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, IconButton, Input, InputAdornment, Tooltip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

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
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: ' 0px 1px 1px rgba(0, 0, 0, 0.25)',
        margin: '1rem',
        padding: '0.5rem',
        width: '33%'
      }}>
      <h2
        style={{
          margin: '0.5rem',
          fontWeight: 400,
          textAlign: 'left',
          textDecoration: 'underline'
        }}>
        Monthly Saving Amount
      </h2>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '4rem',
          justifyContent: 'space-between'
        }}>
        <p style={{ margin: '0.5rem', textAlign: 'left', width: '50%' }}>Each month I can save:</p>
        {isEditing ? (
          <div style={{ display: 'flex', width: '50%' }}>
            <Input
              id="standard-adornment-amount"
              type="number"
              startAdornment={
                <InputAdornment position="start">
                  <span
                    style={{
                      fontFamily: 'Kaushan Script, cursive',
                      fontSize: '2rem',
                      color: 'dodgerblue'
                    }}>
                    £
                  </span>
                </InputAdornment>
              }
              name="amountSavedEachMonth"
              value={input}
              onChange={handleChange}
              sx={{
                color: 'dodgerblue',
                fontFamily: 'Kaushan Script, cursive',
                fontSize: '2rem'
              }}
            />

            <Tooltip title="Confirm" placement="right-start">
              <span style={{ alignSelf: 'center' }}>
                <IconButton
                  aria-label="confirm"
                  color="success"
                  disabled={isConfirmDisabled}
                  onClick={handleConfirm}>
                  <CheckIcon size="small" />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title="Cancel" placement="right-start">
              <IconButton aria-label="cancel" color="error" onClick={handleCancel}>
                <CloseIcon size="small" />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <Tooltip title="Edit" placement="right-start">
            <Button
              variant="text"
              size="large"
              onClick={handleClick}
              sx={{ fontFamily: 'Kaushan Script, cursive', fontSize: '2rem' }}>
              {`£${monthlySavingAmount}`}
            </Button>
          </Tooltip>
        )}
      </div>

      {goalsWithIssues.length > 0 && (
        <div>
          <h3
            style={{
              color: 'red',
              margin: '0.5rem',
              fontWeight: 400,
              textAlign: 'left',
              textDecoration: 'underline'
            }}>
            {goalsWithIssues.length} Issue{goalsWithIssues.length === 1 ? '' : 's'}
          </h3>
          <p style={{ margin: '0.5rem', textAlign: 'left' }}>
            Based on your monthly saving amount and saving goals, you won&apos;t have enough for:
          </p>
          {goalsWithIssues.map((issue) => {
            return (
              <p
                key={`${issue.month} - ${issue.goal}`}
                style={{ margin: '0.5rem', textAlign: 'left' }}>
                <span style={{ fontWeight: 'bold' }}>{issue.goal}</span> in{' '}
                <span style={{ fontWeight: 'bold' }}>{issue.month}</span>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MonthlySavingAmount;
