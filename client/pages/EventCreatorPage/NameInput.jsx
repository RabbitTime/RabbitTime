import React from 'react';

const NameInput = ({ setName }) => {
  return (
    <div style={{'margin': '20px 0px 10px'}}>
      <label style ={{'margin-right': '10px'}}>Name of your event?</label>
      <input type="text" onChange={(e) => { setName(e.target.value) }} />
    </div>
  );
};

export default NameInput;