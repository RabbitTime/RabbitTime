import React, { useContext } from 'react';
import {EventContext} from './EventCreatorPage.jsx';

const Name = () => {
  const {name, setName} = useContext(EventContext);
  // console.log(name);
  // console.log(setName);
  return (
    <div className='eventName'>
      <label >Name of your Event </label>
      <br></br>
      <input type="text" placeholder='Event Name' onChange={setName}/>
    </div>
  );
};

export default Name;