// import DatePicker, { TimePicker } from 'sassy-datepicker';
import DatePicker from 'react-datepicker';
import '../pages/createEvent.css';

import '../../node_modules/sassy-datepicker/dist/styles.css';
import { useLocation, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import MyDatePicker from '../components/MyDatePicker';
import MyTimePicker from '../components/MyTimePicker';
import ArrowIcon from '../images/ArrowIcon';
import ArrowBack from '../components/ArrowBack';

const today = new Date();

function CreateEvent() {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(today);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const togglePicker = () => setVisible((v) => !v);

  const handleDateSelect = (newDate) => {
    setDate(newDate);
    // setVisible(false);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
  }

  return (
    <div className="add_event-container">
    <ArrowBack/>
      <h1 className="add_event-title">Create new event</h1>
      <form method="post" onSubmit={handleSubmit} className="add_event-form">
        <div className="add_event-wrapper">
          <div className="input-column">
            <label>
              <p>Title</p>
               <input type="text" />
            </label>
            <label><p>Description</p>
              
              <textarea
                rows={7}         
                placeholder="Enter your text here..."
              />
            </label>
          </div>
          <div className="input-column">
            <label>
             <p> Select date</p> <MyDatePicker />
            </label>
            <label><p>Select time</p>
               <MyTimePicker />
            </label>
            <label><p>Location</p>
              <input></input>
            </label>
          </div>
          <div className="input-column">
            <label><p>Category</p>
              <input></input>
            </label>
            <label><p>Add picture</p>
              <input></input>
            </label>
            <label><p>Priority</p>
              <input></input>
            </label>
          </div>
        </div>
        <button className="add_event-button">Add event</button>
      </form>
    </div>
  );
}

export default CreateEvent;

{
  /* <input type="time" name="time" required />
        <input type="text" />
        <select name="">
          <option value="" hidden >Select Category</option>
          <option value="art">Art</option>
          <option value="sport">Sport</option>
          <option value="theater">Theater</option>
          <option value="cinema">Cinema</option>
          <option value="green">GreenPeace</option>
        </select>
        </select>
        <input type="file" />
        <select name=""  >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        <button type="submit">Add event</button> */
}
