import React, { useState, useEffect } from 'react';
import '../css/main.css';

function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); 
  }, []);

  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

    const day = daysOfWeek[dateTime.getDay()];
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="timeZone">
      <span className="timeZone_info">{ day }, { date }, { time }, { timeZone }</span>
    </div>
  );
}

export { DateTimeDisplay};
// ---------------------------------------------------
function DaysOfWeek () {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); 
  }, []);

  const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  const monthsOfYear = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ];

    const day = daysOfWeek[dateTime.getDay()];
    const dayOfMonth = dateTime.getDay();
    const month = monthsOfYear[dateTime.getMonth()];

  return (
<p className="dayInfo_text">{ dayOfMonth + 1 } { month }, { day} </p>
  );
}

export { DaysOfWeek };
// ---------------------------------------------------
function TimeOfDay () {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId); 
  }, []);

    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  return (
    <p className="dayInfo_rightcolumn">{ hours }:{ minutes }</p>
  );
}
export {TimeOfDay};