import'./TimeCard.css'

const TimeCard = () => {
  return (
    <div className="timecard">

      <div className="timecard-in">
      <h2>IN</h2>
      </div>

      <div className="timecard-out">
      <h2>OUT</h2>
      </div>
         
      {/* <section className="timecard-body">
        <ul>
          <li><h5>MON</h5></li>
          <li><h5>TUE</h5></li>
          <li><h5>WED</h5></li>
          <li><h5>THU</h5></li>
          <li><h5>FRI</h5></li>
          <li><h5>SAT</h5></li>
          <li><h5>SUN</h5></li>
        </ul>
      </section> */}
        
        <div className="hours">
          <h4>Hours</h4>
        </div>
        
        <div className="hours-in-decimal">
          <h4>Decimal</h4>
        </div>


  </div>
  )
};

export default TimeCard;