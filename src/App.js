
import expensedata from './data.json';
import Barchart from './components/Barchart';
import './App.css';

function App() {
  let total = expensedata.reduce((accu,esdata) => {
    return accu + esdata.amount
  },0)

  return (
    <main className="main-section">
    <div className="balance">
      <div className="inner-section">
        <p>My balance</p>
      <h2>$921.48</h2>
      </div>
      <img src="../images/logo.svg"></img>
    </div>
    <div className="spend-chart">
      <h2>Spending - Last 7 Days</h2>
      <div className="days">
       <Barchart />
      </div>
      <div className="total">
        <div>
          <p>Total this month</p>
        <h2>${total}</h2>
        </div>
        <div className="stats">
        <p className="percent"><span>+2.4%</span></p>
        <p>from last month</p>
        </div>
    </div>
    </div>
  </main>
  );
}

export default App;
