import React from 'react';
import { AddNewSavingItem, SavingItems } from './index';
import { Container } from './styles';
import { SetTableData, TableData } from '../types';

const SavingGoals = ({
  tableData,
  setTableData
}: {
  tableData: TableData;
  setTableData: SetTableData;
}) => (
  <Container>
    <AddNewSavingItem tableData={tableData} setTableData={setTableData} />

    <SavingItems tableData={tableData} setTableData={setTableData} />
  </Container>
);

export default SavingGoals;
