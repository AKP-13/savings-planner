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

const SavingsContainer = styled.div`
  display: flex;
`;

const App = () => {
  const [tableData, setTableData] = useState<TableData>([
    {
      month: 'February 2024',
      saved: 3200,
      savingGoals: [
        {
          itemToSaveFor: "Kinte's Parents' Birthdays",
          itemAmount: '150',
          monthNeeded: 'February',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: "Valentine's Day",
          itemAmount: '50',
          monthNeeded: 'February',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: "Kinte's Birthday",
          itemAmount: '100',
          monthNeeded: 'February',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: 'Lithuania',
          itemAmount: '100',
          monthNeeded: 'February',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: "Jord's Stag 2nd Payment",
          itemAmount: '85',
          monthNeeded: 'February',
          yearNeeded: '2024'
        }
      ]
    },
    {
      month: 'March 2024',
      saved: 500,
      savingGoals: [
        {
          itemToSaveFor: "Jord's Stag Spending",
          itemAmount: '300',
          monthNeeded: 'March',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: 'Suit',
          itemAmount: '300',
          monthNeeded: 'March',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: "Mother's Day",
          itemAmount: '20',
          monthNeeded: 'March',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: "Jord's mini stag",
          itemAmount: '50',
          monthNeeded: 'March',
          yearNeeded: '2024'
        }
      ]
    },
    {
      month: 'April 2024',
      saved: 500,
      savingGoals: [
        {
          itemToSaveFor: 'LISA 2024',
          itemAmount: '3160',
          monthNeeded: 'April',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: "Jord and Megan's Wedding",
          itemAmount: '100',
          monthNeeded: 'April',
          yearNeeded: '2024'
        },
        {
          itemToSaveFor: "Mum's Birthday",
          itemAmount: '60',
          monthNeeded: 'April',
          yearNeeded: '2024'
        }
      ]
    },
    {
      month: 'May 2024',
      saved: 580,
      savingGoals: [
        {
          itemToSaveFor: "Libby & Stan's Wedding",
          itemAmount: '100',
          monthNeeded: 'May',
          yearNeeded: '2024'
        }
      ]
    },
    {
      month: 'June 2024',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'July 2024',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'August 2024',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'September 2024',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'October 2024',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'November 2024',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'December 2024',
      saved: 500,
      savingGoals: [
        {
          itemToSaveFor: 'Christmas',
          itemAmount: '500',
          monthNeeded: 'December',
          yearNeeded: '2024'
        }
      ]
    },
    {
      month: 'January 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'February 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'March 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'April 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'May 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'June 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'July 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'August 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'September 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'October 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'November 2025',
      saved: 500,
      savingGoals: []
    },
    {
      month: 'December 2025',
      saved: 500,
      savingGoals: []
    }
  ]);

  const totalSaved = useMemo(() => returnTotals({ tableData }), [tableData]);

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
