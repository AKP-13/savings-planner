import { useState } from 'react';
// Components
import SavingsProjectionsTable from './savingsProjections/SavingsProjectionsTable';
import SavingGoals from './savingGoals/SavingGoals';
import GraphDisplay from './graph/GraphDisplay';
import Header from './header/Header';
// Styles
import './App.css';

function App() {
  const [tableData, setTableData] = useState([
    { month: 'April 2023', saved: 1204, withdrawn: 0 },
    { month: 'May 2023', saved: 500, withdrawn: 0 },
    { month: 'June 2023', saved: 500, withdrawn: 0 },
    { month: 'July 2023', saved: 500, withdrawn: 0 },
    { month: 'August 2023', saved: 500, withdrawn: 0 },
    { month: 'September 2023', saved: 500, withdrawn: 0 },
    { month: 'October 2023', saved: 500, withdrawn: 0 },
    { month: 'November 2023', saved: 500, withdrawn: 0 },
    { month: 'December 2023', saved: 500, withdrawn: 0 },
    { month: 'January 2024', saved: 500, withdrawn: 0 },
    { month: 'February 2024', saved: 500, withdrawn: 0 },
    { month: 'March 2024', saved: 500, withdrawn: 0 },
    { month: 'April 2024', saved: 500, withdrawn: 0 },
    { month: 'May 2024', saved: 500, withdrawn: 0 },
    { month: 'June 2024', saved: 500, withdrawn: 0 },
    { month: 'July 2024', saved: 500, withdrawn: 0 },
    { month: 'August 2024', saved: 500, withdrawn: 0 },
    { month: 'September 2024', saved: 500, withdrawn: 0 },
    { month: 'October 2024', saved: 500, withdrawn: 0 },
    { month: 'November 2024', saved: 500, withdrawn: 0 },
    { month: 'December 2024', saved: 500, withdrawn: 0 },
    { month: 'January 2025', saved: 500, withdrawn: 0 },
    { month: 'February 2025', saved: 500, withdrawn: 0 },
    { month: 'March 2025', saved: 500, withdrawn: 0 },
    { month: 'April 2025', saved: 500, withdrawn: 0 },
    { month: 'May 2025', saved: 500, withdrawn: 0 },
    { month: 'June 2025', saved: 500, withdrawn: 0 },
    { month: 'July 2025', saved: 500, withdrawn: 0 },
    { month: 'August 2025', saved: 500, withdrawn: 0 },
    { month: 'September 2025', saved: 500, withdrawn: 0 },
    { month: 'October 2025', saved: 500, withdrawn: 0 },
    { month: 'November 2025', saved: 500, withdrawn: 0 },
    { month: 'December 2025', saved: 500, withdrawn: 0 }
  ]);

  return (
    <div className="App">
      <Header />

      <SavingGoals tableData={tableData} setTableData={setTableData} />

      <SavingsProjectionsTable tableData={tableData} />

      <GraphDisplay />
    </div>
  );
}

export default App;
