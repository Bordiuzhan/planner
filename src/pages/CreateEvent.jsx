// import DatePicker, { TimePicker } from 'sassy-datepicker';
import DatePicker from 'react-datepicker';

import '../../node_modules/sassy-datepicker/dist/styles.css';
import { useLocation, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import MyDatePicker from '../components/MyDatePicker';
import MyTimePicker from '../components/MyTimePicker';

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
    <div>
      <NavLink to={backLinkHref}> ⬅ Back </NavLink>
      <h1>Create new event</h1>
      <form method="post" onSubmit={handleSubmit}>
        <input type="text" />
        <textarea rows={4} cols={50} placeholder="Enter your text here..." />
        <MyDatePicker />
        <MyTimePicker/> 
        {/* <input type="time" name="time" required />
        <input type="text" />
        <select name="">
          <option value="" hidden >Select Category</option>
          <option value="art">Art</option>
          <option value="sport">Sport</option>
          <option value="theater">Theater</option>
          <option value="cinema">Cinema</option>
          <option value="green">GreenPeace</option>
        </select>
        <input type="file" />
        <select name=""  >
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add event</button> */}
      </form>
    </div>
  );
}

export default CreateEvent;
