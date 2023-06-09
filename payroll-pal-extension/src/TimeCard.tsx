
const TimeCard = () => {
  return (
    <div className="timecard">
      <header className="timecard-header">
      <h2>IN</h2>
      <h2>OUT</h2>
      </header>
      <section className="timecard-body">
        <ul>
          <li><h5>MON</h5></li>
          <li><h5>TUE</h5></li>
          <li><h5>WED</h5></li>
          <li><h5>THU</h5></li>
          <li><h5>FRI</h5></li>
          <li><h5>SAT</h5></li>
          <li><h5>SUN</h5></li>
        </ul>
      </section>
    </div>
  
  )
};

export default TimeCard;