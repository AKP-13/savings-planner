/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AddNewSavingItem, MonthlySavingCard, SavingItems } from './index';

const SavingGoals = ({ tableData, setTableData }) => {
  const [savingItems, setSavingItems] = useState([]);

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        border: '1px solid gray',
        borderRadius: '8px',
        display: 'flex',
        height: '250px',
        margin: '1rem'
      }}>
      <MonthlySavingCard tableData={tableData} setTableData={setTableData} />

      <AddNewSavingItem
        setSavingItems={setSavingItems}
        tableData={tableData}
        setTableData={setTableData}
      />

      <SavingItems
        tableData={tableData}
        setTableData={setTableData}
        savingItems={savingItems}
        setSavingItems={setSavingItems}
      />
    </div>
  );
};

export default SavingGoals;
