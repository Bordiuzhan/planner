import React from 'react';
import ArrowBack from '../components/ArrowBack';
import '../pages/event.css';
import { useParams } from 'react-router-dom';

function Event({data}) {


  const { eventId } = useParams();
  const event = data.find(event => event.id.toString() === eventId);
  return (
    <div className="event-container">
      <ArrowBack />

      <div className="event-content-wrapper">
        <h1 className='event-title'>{event.title}</h1>
        <div className='event-content'>
          <img src={event.img} alt={event.title}  className='event-img'/>
          <p className='event-text'>
            Discover an enchanting evening celebrating the world of art at our
            exclusive gallery opening.
          </p>
          <div className='event-chips-wrapper'>
            <p className='event-chip'>{event.category}</p>
            <p className='event-chip'>{event.priority}</p>
            <p className='event-chip'>{event.location}</p>
            <p className='event-chip'>{event.date}</p>
          </div>
          <div className='event-buttons-wrapper'>
            <button className='event-button-edit'>Edit</button>
            <button className='event-button-delete'>Delete event</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
