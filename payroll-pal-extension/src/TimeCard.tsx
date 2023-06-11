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
        
        <div className="timestamps"> 
          <div className="days-column">
          <Days />
          </div>
          <div className="first-column">
          <Days/>
          </div>
          <div className="second-column">
          <Days/>
          </div>
      </div>
      </div>

      <div className="calculations">
        <div className="hours">
        <h4>Hours</h4>
        <h4>Decimal</h4>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
