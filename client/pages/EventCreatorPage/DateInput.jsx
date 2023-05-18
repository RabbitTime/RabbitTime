import React from 'react';
import Calendar from 'react-calendar';

const DateInput = ({ updateDates }) => {
  return (
    <div>
      <label>What days would you like to meet?</label>
      <Calendar onClickDay={updateDates} />
    </div>
  );
};

export default DateInput;