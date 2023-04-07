/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { AddNewSavingItem, SavingItems } from './index';

const Container = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 250px;
  margin: 1rem;
  padding: 0.5rem;
  width: 66%;
`;

const SavingGoals = ({ tableData, setTableData }) => {
  return (
    <Container>
      <AddNewSavingItem tableData={tableData} setTableData={setTableData} />

      <SavingItems tableData={tableData} setTableData={setTableData} />
    </Container>
  );
};

export default SavingGoals;
