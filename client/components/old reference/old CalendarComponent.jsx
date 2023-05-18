// renders the calendar and handles click events
import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import {EventContext} from './EventCreatorPage.jsx';
// import moment from 'moment';

const CalendarComponent = ()=>{
  const {handleClick} = useContext(EventContext);
  return (      
    <div className='calenderSection'>  
      <h1 className='text-center'> Yeti Time </h1>
      <h2> What Days Would You Like to Meet?</h2>
      <div className='calender-container'>
        <Calendar onClickDay={handleClick} />
      </div>
    </div>
  );
};

export default CalendarComponent;