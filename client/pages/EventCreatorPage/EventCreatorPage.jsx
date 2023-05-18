import React, { useState } from 'react';
import moment from 'moment';

import DateInput from './DateInput.jsx';
import NameInput from './NameInput.jsx';
import TimeInput from './TimeInput.jsx';

const EventCreatorPage = () => {
  const [dates, setDates] = useState([]);

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

  return (
    <div>
      <h1>RabbitTime</h1>
      <form>
        <DateInput updateDates={updateDates} />
        <NameInput />
        <TimeInput />
      </form>
    </div>
  );
};

export default EventCreatorPage;