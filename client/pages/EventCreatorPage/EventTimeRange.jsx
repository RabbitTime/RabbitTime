import React from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import {EventContext} from './EventCreatorPage.jsx';

const EventTimeRange = () => {
  const {startTime, endTime, handleStartTime, handleEndTime} = EventContext;
  return (
    <div className='timePickers'>
      <TimePicker 
        className="start"
        onChange={handleStartTime}
        value={startTime}
        clearIcon={null}
        disableClock={true}
        minuteInterval={30}
      /> 
      <h2> to </h2>
      <TimePicker 
        className="end"
        onChange={handleEndTime}
        value={endTime}
        clearIcon={null}
        disableClock={true}
      /> 
    </div>
  );
};

export default EventTimeRange;