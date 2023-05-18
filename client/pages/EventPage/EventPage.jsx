import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EventPage.css';

import Timetable from './Timetable.jsx';

const EventPage = () => {
  const [event, setEvent] = useState();
  const { id } = useParams(); // get event id  

  // fetch event data
  useEffect(() => {
    async function fetchEvent() {
      const res = await fetch(`/api/event/${id}`);
      const data = await res.json();
      setEvent(data);
    }
    fetchEvent();
  }, [id]);

  // only render component if event has been fetched
  if (event) {
    return (
      <div className='eventpage'>
        <h1>{event.name}</h1>
        <Timetable event={event} />
      </div>
    );
  }
};

export default EventPage;
