import './Days.css'
import { useState } from 'react';


const daysOftheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']


const Days = () => {
  return (
    <section>
      <ul className="week">
        <li className='day'>
          <h5>MON</h5>
          <input type="time"></input>
          <input type="time"></input>
        </li>
        <li>
          <h5>TUE</h5>
        </li>
        <li>
          <h5>WED</h5>
        </li>
        <li>
          <h5>THU</h5>
        </li>
        <li>
          <h5>FRI</h5>
        </li>
        <li>
          <h5>SAT</h5>
        </li>
        <li>
          <h5>SUN</h5>
        </li>
      </ul>
    </section>
  );
}

export default Days;