import React from 'react';
import TimePicker from 'react-time-picker';

const TimeInput = ({ startTime, endTime, setStartTime, setEndTime }) => {
  console.log(startTime);
  console.log(endTime);
  return(
    <div className = "times">
      <label>Between what times do you want to meet?</label>
      <TimePicker 
        className="start"
        onChange={setStartTime}
        value={startTime}
        clearIcon={null}
        disableClock={true}
        minuteInterval={30}
      /> 
      <TimePicker 
        className="end"
        onChange= {((time) => setEndTime(time))}
        value={endTime}
        clearIcon={null}
        disableClock={true}
        minuteInterval={30}
      /> 
    </div>
  );
};

export default TimeInput;