import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import GraphDisplay from './graph/GraphDisplay';
import Header from './header/Header';
import MonthlySavingAmount from './monthlySavingAmount/MonthlySavingAmount';
import SavingsProjectionsTable from './savingsProjections/SavingsProjectionsTable';
import { returnTotals } from './utils/helpers';
import './App.css';
import SavingGoals from './savingGoals/SavingGoals';
import { TableData } from './types';
import { initialTableData } from './utils/constants';

const SavingsContainer = styled.div`
  display: flex;
  margin: 0 3rem;
`;

const App = () => {
  const [tableData, setTableData] = useState<TableData>(initialTableData);

  const totalSaved = useMemo(() => returnTotals({ tableData }), [JSON.stringify(tableData)]);

  return (
    <div className="App">
      <Header />

      <SavingsContainer>
        <MonthlySavingAmount
          tableData={tableData}
          setTableData={setTableData}
          totalSaved={totalSaved}
        />

        <SavingGoals tableData={tableData} setTableData={setTableData} />
      </SavingsContainer>

      <SavingsProjectionsTable tableData={tableData} totalSaved={totalSaved} />

      <GraphDisplay totalSaved={totalSaved} />
    </div>
  );
};

export default App;
