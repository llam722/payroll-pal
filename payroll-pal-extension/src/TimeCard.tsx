import "./TimeCard.css";
import Days from './Days'

const TimeCard = () => {
  return (
    <div className="timecard">
      <div className="timecard-header">
        <div className="timecard-in-out">
          <h2>IN</h2>
          <h2>OUT</h2>
        </div>

      </div>

      <div className="calculations">
        <div className="hours">
          <h4>Hours</h4>
          <h4>Decimal</h4>
        </div>
      </div>

      <div className="timecard-body">
        <ul className="day-row">
          <div className="left">
          <li>MON</li>
          <li><input type='time'></input></li>
          <li><input type='time'></input></li>

          </div>
          <div className="right">
          <li>30.8</li>
          <li>50.85</li>
          </div>

          
        </ul>
      </div>

    </div>
  );
};

export default TimeCard;
