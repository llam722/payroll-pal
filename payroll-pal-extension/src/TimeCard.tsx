import "./TimeCard.css";

const TimeCard = () => {
  return (
    <div className="timecard">


      <div className="timecard-header">
        <div className="days-spacer"></div>
          <div className="column">IN</div>
          <div className="column">OUT</div>
      </div>
      
      <div className="hours">
        <div className="hours-hours">

          <h4>Hours</h4>
        </div>
        <div>
        </div>
        <div className="hours-decimal">
          <h4>Decimal</h4>
        </div>
      </div>

    </div>
  );
};

export default TimeCard;
