import React from 'react';
import Calendar from 'react-calendar';

const DateInput = ({ updateDates }) => {
  return (
    <div>
      <div style={{'margin-bottom': '20px'}}>
        <label style={{'margin-top': '40px'}}>What days would you like to meet?</label>
      </div>
      <Calendar onClickDay={updateDates} />
    </div>
  );
};

export default DateInput;