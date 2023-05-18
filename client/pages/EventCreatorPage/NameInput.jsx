import React from 'react';

const NameInput = ({ setName }) => {
  return (
    <div>
      <label>Name of your event?</label>
      <input type="text" onChange={(e) => { setName(e.target.value) }} />
    </div>
  );
};

export default NameInput;