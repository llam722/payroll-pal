import React from "react";
import "./App.css";
import TimeCard from "./TimeCard";
import Days from "./Days";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Payroll Pal</h1>
      </header>
      <div className="timebody">
        <TimeCard />

        <Days />
        <Days />
        <Days />
        <Days />
        <Days />
        <Days />
        <Days />
      </div>

      <div className="App-totals">
        <div>
          <label>
            Hourly Rate:
            <input
              className="input-salary"
              type="number"
              style={{ width: "10%" }}
            />
          </label>

          <div>
            Total Salary:
            <input
              className="input-salary"
              type="number"
              style={{ width: "10%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
