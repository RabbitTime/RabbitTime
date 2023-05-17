import React, { useContext } from 'react';
import {EventContext} from './EventCreatorPage.jsx';

const EventName = () => {
  const {name, handleName} = useContext(EventContext);
  return (
    <div className='eventName'>
      <label >Name of your Event </label>
      <br></br>
      <input type="text" placeholder='Event Name' value={name} onChange={handleName}/>
    </div>
  );
};

export default EventName;