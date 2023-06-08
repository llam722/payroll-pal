import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeCard from './TimeCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Payroll Pal</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <TimeCard/>
    </div>
  );
}

export default App;
