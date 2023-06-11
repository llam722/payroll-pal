import'./TimeCard.css'

const TimeCard = () => {
  return (
    <div className="timecard">

      <header className="timecard-header">
      <div className="timecard-in">
      <h2>IN</h2>
      </div>

      <div className="timecard-out">
      <h2>OUT</h2>
      </div>

        <div className="calculations">
        <div className="hours">
          <h4>Hours</h4>
        </div>

        <div className="hours-in-decimal">
          <h4>Decimal</h4>

        </div>
        </div>
      </header>
         
      


  </div>
  )
};

export default TimeCard;