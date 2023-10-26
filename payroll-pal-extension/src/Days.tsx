import "./Days.css";

const Days = () => {
  return (
    <div className="week">
      <div className="day">
        <h5 className="dayOfWeek">MON</h5>


        <div className="timeInput">
          <input type="time"></input>
      </div>
        <div className="timInput">
          <input type="time"></input>
      </div>
        
      </div>

      
      <div className="days-calc">
        <div className="day-hours">
          <h4>8:15</h4>
        </div>
        <div></div>
        <div className="day-decimal">
          <h4>8.25</h4>
        </div>
      </div>
    
      
    </div>
  );
};

export default Days;
