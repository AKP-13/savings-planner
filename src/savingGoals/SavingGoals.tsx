import React, { useState } from 'react';
import { AddNewSavingItem, SavingItems } from './index';
import { SetTableData, TableData } from '../types';
import { Title } from '../monthlySavingAmount/styles';
import { Container } from '../globalStyles';
import { goalBeingEditedDefault } from './helpers';
import { GoalBeingEdited } from './types';

type Params = {
  tableData: TableData;
  setTableData: SetTableData;
};

const SavingGoals = ({ tableData, setTableData }: Params) => {
  const [goalBeingEdited, setGoalBeingEdited] = useState<GoalBeingEdited>(goalBeingEditedDefault);

  return (
    <Container $width="66%" $margin="1rem 0 1rem 1rem">
      <Title>Saving Goals</Title>

      <div style={{ alignItems: 'center', display: 'flex' }}>
        <AddNewSavingItem
          tableData={tableData}
          setTableData={setTableData}
          goalBeingEdited={goalBeingEdited}
        />

        <SavingItems
          tableData={tableData}
          setTableData={setTableData}
          goalBeingEdited={goalBeingEdited}
          setGoalBeingEdited={setGoalBeingEdited}
        />
      </div>
    </Container>
  );
};

export default SavingGoals;
