// renders the calendar and form components
import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import '../../components/Cal.css';

// importing newly modularized components
import EventPageCalendar from './EventPageCalendar.jsx';
import EventName from './EventName.jsx';
import EventTimeRange from './EventTimeRange.jsx';

export const EventContext = createContext();

function EventCreatorPage() {
  const [dates, setSelectedDates] = useState([]);
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('12:00');
  const [endTime, setEndTime] = useState('12:30');

  const navigate = useNavigate();

  const handleClick = (selectedDates) => {
    if (Array.isArray(selectedDates)) {
      const formattedDates = selectedDates.map((date) =>
        moment(date).format('MMMM Do YYYY')
      );
      setSelectedDates([...dates, ...formattedDates]);
    } else {
      const formattedDate = moment(selectedDates).format('MMMM Do YYYY');
      setSelectedDates([...dates, formattedDate]);
    }
  };

  const handleStartTime = (time) => {
    setStartTime(time);
  };

  const handleEndTime = (time) => {
    setEndTime(time);
  };

  const handleCreateEvent = () => {
    const event = {
      name: name,
      dates: dates,
      times: {start: startTime, end: endTime},
    };

    fetch('/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    })
      .then((response) => response.json())
      .then((data) => {
        const id = data._id;
        console.log(id);
        navigate(`/event/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log('click');
  };
  
  return (
    <div className='Yeti'>
      <EventContext.Provider value = {{dates, name, startTime, endTime, handleClick, handleCreateEvent, handleStartTime, handleEndTime}} />
      <EventPageCalendar handleClick = {handleClick} />
      <EventName setName = {setName} />
      <EventTimeRange />
      <div className="buttonform">
        <button onClick={handleCreateEvent}>Create Event</button>
      </div> 
      <div className='air air1'></div>
      <div className='air air2'></div>
      <div className='air air3'></div>
      <div className='air air4'></div>
    </div>
  );
}

export default EventCreatorPage;