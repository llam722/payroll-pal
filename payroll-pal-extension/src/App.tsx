import React from 'react';
import './App.css';
import TimeCard from './TimeCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Payroll Pal</h1>
      </header>
      <div className="App-body">
        <TimeCard/>
      </div>
      <div className="App-totals">
        <p>Hourly Rate</p>
        <p>Totals</p>
      </div>

      
    </div>
  );
}

export default App;
