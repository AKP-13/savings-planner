/* eslint-disable react/prop-types */
import { AddNewSavingItem, SavingItems } from './index';
// Styles
import { Container } from './styles';

const SavingGoals = ({ tableData, setTableData }) => {
  return (
    <Container>
      <AddNewSavingItem tableData={tableData} setTableData={setTableData} />

      <SavingItems tableData={tableData} setTableData={setTableData} />
    </Container>
  );
};

export default SavingGoals;
