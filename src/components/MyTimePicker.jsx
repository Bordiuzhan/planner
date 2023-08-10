import React, { useState } from 'react';
import '../index.css';

function MyTimePicker() {
  const [selectedTime, setSelectedTime] = useState(null);

  const [value, onChange] = useState();

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <input type="time" className='time-picker'  />
    </div>
  );
}

export default MyTimePicker;
