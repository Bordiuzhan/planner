import React, { useState } from 'react';
import '../index.css';

function MyTimePicker() {
  const [selectedTime, setSelectedTime] = useState(null);

  const [value, onChange] = useState();

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (

      <input type="time"  />

  );
}

export default MyTimePicker;
