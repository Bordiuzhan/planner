import '../pages/CreateEvent.css';

import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import ArrowBack from '../components/ArrowBack';
import CustomSelect from '../components/CustomSelect';
import ImageInput from '../components/ImageInput';
import { useDispatch } from 'react-redux';
import { setEventsData } from '../redux/eventsSlice';

function CreateEvent() {
  const optionsCategory = [
    { key: 1, label: 'art' },
    { key: 2, label: 'music' },
    { key: 3, label: 'business' },
    { key: 4, label: 'conference' },
    { key: 5, label: 'workshop' },
    { key: 6, label: 'party' },
    { key: 7, label: 'sport' },
  ];
  const optionsPriority = [
    { key: 1, label: 'high' },
    { key: 2, label: 'medium' },
    { key: 3, label: 'low' },
  ];
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [formDataImg, setFormDataImg] = useState(null);

 const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dw8vkzfdu/upload',
        {
          method: 'POST',
          body: formDataImg,
        }
      );

      if (response.ok) {
        const dataImg = await response.json();
        const newEvent = {
          id: nanoid(),
          title: formData.get('title'),
          img: dataImg.secure_url,
          body: formData.get('body'),
          location: formData.get('location'),
          date: formData.get('date') + formData.get('time'),
          category: category,
          priority: priority,
        };
        dispatch(setEventsData(newEvent))
        navigate("/")
      } else {
        const newEvent = {
          id: nanoid(),
          title: formData.get('title'),
          img: "https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg",
          body: formData.get('body'),
          location: formData.get('location'),
          date: formData.get('date') + formData.get('time'),
          category: category,
          priority: priority,
        };
        dispatch(setEventsData(newEvent))
        navigate("/")
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } 
  };

  const handleSelectChangeCategory = (newOption) => {
    setCategory(newOption.label);
  };
  const handleSelectChangePriority = (newOption) => {
    setPriority(newOption.label);
  };

  return (
    <div className="add_event-container">
      <ArrowBack />
      <h1 className="add_event-title">Create new event</h1>
      <form method="post" onSubmit={handleSubmit} className="add_event-form">
        <div className="add_event-wrapper">
          <div className="input-column">
            <label>
              <p>Title</p>
              <input type="text" name="title" />
            </label>
            <label>
              <p>Description</p>
              <textarea
                name="body"
                rows={6}
                placeholder="Enter your text here..."
              />
            </label>
          </div>
          <div className="input-column">
            <label>
              <p> Select date</p>
              <input type="date" name="date" />
              {/* <MyDatePicker name="date" onChange={handleData}/> */}
            </label>
            <label>
              <p>Select time</p>
              <input type="time" name="time" />
              {/* <MyTimePicker name="time" /> */}
            </label>
            <label>
              <p>Location</p>
              <input name="location"></input>
            </label>
          </div>
          <div className="input-column">
            <CustomSelect
              title={'Category'}
              options={optionsCategory}
              value={category}
              onChange={handleSelectChangeCategory}
            />
            <label>
              <p>Add picture</p>
              <ImageInput name="img" addImgData={setFormDataImg} />
            </label>
            <CustomSelect
              title={'Priority'}
              options={optionsPriority}
              value={priority}
              onChange={handleSelectChangePriority}
            />
          </div>
        </div>
        <button className="add_event-button">Add event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
