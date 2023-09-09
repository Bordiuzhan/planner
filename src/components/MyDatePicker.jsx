import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../index.css';

const MyDatePicker = ({ initialValue, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null );
  const [isOpen, setIsOpen] = useState(false);

  const handleSetDate = () => {
    setIsOpen(false);
    onChange(selectedDate); 
  };

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-date-picker">
      <input
        type="text"
        className="date-input"
        value={selectedDate ? selectedDate : 'Select date' }
        onClick={toggleDatePicker}
        readOnly
      />
      {isOpen && (
        <div className="date-picker-container">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            shouldCloseOnSelect={false}
            inline
          />
          <div className="button-container">
            <button className="cancel-button" onClick={toggleDatePicker}>
              Cancel
            </button>
            <button className="set-button" onClick={handleSetDate}>
              Set Date
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDatePicker;

