/* eslint-disable react/prop-types */
import { useState } from 'react';
import MonthlySavingCard from './MonthlySavingCard';
import AddNewSavingItem from './AddNewSavingItem';
import SavingItems from './SavingItems';

const SavingGoals = ({ tableData, setTableData }) => {
  const [savingItems, setSavingItems] = useState([]);

  return (
    <div style={{ display: 'flex' }}>
      <MonthlySavingCard tableData={tableData} setTableData={setTableData} />

      <AddNewSavingItem setSavingItems={setSavingItems} setTableData={setTableData} />

      <SavingItems
        savingItems={savingItems}
        tableData={tableData}
        setTableData={setTableData}
        setSavingItems={setSavingItems}
      />
    </div>
  );
};

export default SavingGoals;
