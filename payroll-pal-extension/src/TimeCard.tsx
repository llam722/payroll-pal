import "./TimeCard.css";

const TimeCard = () => {
  return (
    <div className="timecard">
      <div className="timecard-header">

        <h2>IN</h2>
        <h2>OUT</h2>

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
