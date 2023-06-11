import "./TimeCard.css";

const TimeCard = () => {
  return (
    <div className="timecard">
      <div className="timecard-header">

        <h2>IN</h2>
        <h2>OUT</h2>

      </div>

      <div className="calculations">
        <h4 className="hours">Hours</h4>
        <h4 className="hours">Decimal</h4>
      </div>
    </div>
  );
};

export default TimeCard;
