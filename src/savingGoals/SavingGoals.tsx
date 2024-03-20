import React from 'react';
import { AddNewSavingItem, SavingItems } from './index';
import { SetTableData, TableData } from '../types';
import { Title } from '../monthlySavingAmount/styles';
import { Container } from '../globalStyles';

const SavingGoals = ({
  tableData,
  setTableData
}: {
  tableData: TableData;
  setTableData: SetTableData;
}) => (
  <Container $width="66%" $margin="1rem 0 1rem 1rem">
    <Title>Saving Goals</Title>

    <div style={{ alignItems: 'center', display: 'flex' }}>
      <AddNewSavingItem tableData={tableData} setTableData={setTableData} />

      <SavingItems tableData={tableData} setTableData={setTableData} />
    </div>
  </Container>
);

export default SavingGoals;
