import './App.css';
import Cards from './components/Cards/Cards';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div className="App container">
      <div className="activity-container">  
        <Cards></Cards>
      </div>

      <div className="activity-counter">
        <Summary></Summary>

      </div>
    </div>
  );
}

export default App;
