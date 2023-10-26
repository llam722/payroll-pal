import React from 'react';
import './App.css';
import TimeCard from './TimeCard'
import Days from './Days';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Payroll Pal</h1>
      </header>

        <TimeCard/>
      <div>

      </div>

      <Days/>
      <Days/>
      <Days/>
      <Days/>
      <Days/>
      <Days/>
      <Days/>


      <div className="App-totals">
        <p className='hourly'>Hourly Rate</p>
        <p>Totals</p>
      </div>

      
    </div>
  );
}

export default App;
