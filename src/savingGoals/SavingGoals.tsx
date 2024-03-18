import React from 'react';
import styled from 'styled-components';
import { AddNewSavingItem, SavingItems } from './index';
import { SetTableData, TableData } from '../types';
import { Title } from '../monthlySavingAmount/styles';

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px;
  margin: 1rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  width: 66%;
`;

const SavingGoals = ({
  tableData,
  setTableData
}: {
  tableData: TableData;
  setTableData: SetTableData;
}) => (
  <Container>
    <Title>Saving Goals</Title>

    <div style={{ alignItems: 'center', display: 'flex' }}>
      <AddNewSavingItem tableData={tableData} setTableData={setTableData} />

      <SavingItems tableData={tableData} setTableData={setTableData} />
    </div>
  </Container>
);

export default SavingGoals;
