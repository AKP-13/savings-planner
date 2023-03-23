// Components
import SavingGoals from './savingGoals/SavingGoals';
import GraphDisplay from './graph/GraphDisplay';
import TimeLine from './timeLine/TimeLine';
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
      <TimeLine />
    </div>
  );
}

export default App;
