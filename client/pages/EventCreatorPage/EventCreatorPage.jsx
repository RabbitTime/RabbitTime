import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../../components/Cal.css';

import DateInput from './DateInput.jsx';
import NameInput from './NameInput.jsx';
import TimeInput from './TimeInput.jsx';

const EventCreatorPage = () => {
  const [dates, setDates] = useState([]);
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('12:15');
  const [endTime, setEndTime] = useState('12:30');


  // selectedDate comes from clicking a date on the calendar (built in functionality)
  function updateDates(selectedDate) {
    // format selectedDate to 'Y.M.D' format
    selectedDate = moment(selectedDate).format('Y.M.D');
    
    // create a copy of dates
    const newDates = dates;

    // add/remove selectedDate from array depending on if it already exists
    const index = newDates.indexOf(selectedDate);
    if (index === -1) newDates.push(selectedDate);
    else newDates.splice(index, 1);

    setDates(newDates);
  }

  useEffect(() => {
    console.log(name);
  }, [name]);  // bracket specifies dependencies (if you put brackets, useEffect will run once)

  return (
    <div>
      <h1>RabbitTime</h1>
      <form>
        <DateInput updateDates={updateDates} />
        <NameInput setName={setName} />
        <TimeInput startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime} />
      </form>
    </div>
  );
};

export default EventCreatorPage;