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
import { initialMonthlySavingAmount, initialTableData } from './utils/constants';

const SavingsContainer = styled.div`
  display: flex;
  margin: 0 3rem;
`;

const App = () => {
  const [tableData, setTableData] = useState<TableData>(initialTableData);
  const [monthlySavingAmount, setMonthlySavingAmount] = useState(initialMonthlySavingAmount);
  const [forecastYear, setForecastYear] = useState('2025');

  const totalSaved = useMemo(() => returnTotals({ tableData }), [JSON.stringify(tableData)]);

  return (
    <div className="App">
      <Header
        monthlySavingAmount={monthlySavingAmount}
        tableData={tableData}
        setTableData={setTableData}
        forecastYear={forecastYear}
        setForecastYear={setForecastYear}
      />

      <SavingsContainer>
        <MonthlySavingAmount
          tableData={tableData}
          setTableData={setTableData}
          totalSaved={totalSaved}
          monthlySavingAmount={monthlySavingAmount}
          setMonthlySavingAmount={setMonthlySavingAmount}
        />

        <SavingGoals
          tableData={tableData}
          setTableData={setTableData}
          forecastYear={forecastYear}
        />
      </SavingsContainer>

      <SavingsProjectionsTable
        tableData={tableData}
        totalSaved={totalSaved}
        setTableData={setTableData}
      />

      <GraphDisplay totalSaved={totalSaved} />
    </div>
  );
};

export default App;
