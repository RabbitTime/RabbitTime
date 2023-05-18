import React from 'react';
import {useState} from 'react';

// only for testing setup

export default function CheckboxWithLabel({labelOn, labelOff}) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}