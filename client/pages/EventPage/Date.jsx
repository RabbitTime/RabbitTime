import React from 'react';
import moment from 'moment';

import Timeslot from './Timeslot.jsx';

const Date = ({ date, startTime, endTime, users }) => {
  // use moment to allow 'adding' to these times
  startTime = moment(startTime, 'h:mm A');
  endTime = moment(endTime, 'h:mm A');

  // create an array of Timeslot components
  let timeslots = createTimes(startTime, endTime);
  timeslots = timeslots.map((time) => <Timeslot key={time} time={time}/>);
  // TODO: create onClick functionality (and read timeslots functionality)

  return (
    <div className='date'>
      <label>{date}</label>
      {timeslots}
    </div>
  );
};

// creates an array of time strings from startTime to endTime (moment objects)
function createTimes(startTime, endTime) {
  const times = [];

  // go from startTime to endTime
  let current = startTime;
  while (current < endTime) {
    // push string version of time into array
    times.push(current.format('h:mm A'));
    // increment by 30 minutes
    current.add(30, 'minutes');
  }

  return times;
}

export default Date;
