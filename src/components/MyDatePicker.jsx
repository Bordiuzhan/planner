import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../index.css';

const MyDatePicker = () => {
  const [date, setDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isClose, setIsClose] = useState(false);

  console.log("date",date);
  console.log("selectedDate",selectedDate);

  const handleSetDate = (date) => {
    setDate(selectedDate)
    setIsClose(false);
  };
  const handleFocus = () => {
    setIsClose(true);
  };

  const handleBlur = () => {
    console.log(selectedDate);
  };

  return (
    <div>
      <h2>Date Picker Example</h2>
      <DatePicker
   value={date ? date : 'Select date'}
      open={isClose}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        onFocus={handleFocus}
        // onBlur={handleBlur}
        shouldCloseOnSelect={false}
        // inline={isClose}
        
      >
        <button className="cancel-button" onClick={() => {setIsClose(false); setDate(null)}}>
          Cancel
        </button>
        <button className="set-button" onClick={handleSetDate}>
          Set Date
        </button>
      </DatePicker>
    </div>
  );
};

export default MyDatePicker;
