// Components
import SavingsProjectionsTable from './savingsProjections/SavingsProjectionsTable';
import SavingGoals from './savingGoals/SavingGoals';
import GraphDisplay from './graph/GraphDisplay';
import Header from './header/Header';
// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <SavingGoals />

        <GraphDisplay />
      </div>
      <SavingsProjectionsTable />
    </div>
  );
}

export default App;
