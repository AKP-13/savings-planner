/* eslint-disable react/prop-types */
import { AddNewSavingItem, SavingItems } from './index';

const SavingGoals = ({ tableData, setTableData }) => {
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: ' 0px 1px 1px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        height: '250px',
        margin: '1rem',
        padding: '0.5rem',
        width: '66%'
      }}>
      <AddNewSavingItem tableData={tableData} setTableData={setTableData} />

      <SavingItems tableData={tableData} setTableData={setTableData} />
    </div>
  );
};

export default SavingGoals;
