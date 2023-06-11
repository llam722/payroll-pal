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

        {/* <div className="timestamps">

          {/* <Days /> */}
          
          {/* <div className="days-column"> */}
          {/* </div> */}

        {/* </div> */}
      </div>

      <div className="calculations">
        <div className="hours">
          <h4>Hours</h4>
          <h4>Decimal</h4>
        </div>
      </div>

      <div className="anotherbody">
        <ul>
          <li>
            <p>Mon</p>
            <input type="time"></input>
            <input type="time"></input>
          </li>
          <li><input type="time"></input></li>
        </ul>
      </div>

    </div>
  );
};

export default TimeCard;
