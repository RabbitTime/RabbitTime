import React from 'react';
import moment from 'moment';

import Date from './Date.jsx';

const Timetable = ({ event }) => {
  let { dates, times, users } = event;
  const { start: startTime, end: endTime } = times;
  
  let hours = createHours(startTime, endTime);
  hours = hours.map((hour) => <label>{hour}</label>)

  dates = dates.map((date) => <Date key={date} date={date} startTime={startTime} endTime={endTime} users={users} />);

  return (
    <div className='timetable'>
      <div className='timetable-hours'>{hours}</div>
      {dates}
    </div>
  );
};

// creates an array of time strings from startTime to endTime (moment objects)
function createHours(startTime, endTime) {
  const hours = [];

  // use moment to allow 'adding' to these times
  startTime = moment(startTime, 'h:mm A');
  endTime = moment(endTime, 'h:mm A');

  // go from startTime to endTime
  let current = startTime;
  while (current < endTime) {
    // push string version of time into array
    hours.push(current.format('h A'));
    // increment by 60 minutes
    current.add(60, 'minutes');
  }

  return hours;
}

export default Timetable;
