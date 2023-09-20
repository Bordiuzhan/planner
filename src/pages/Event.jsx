import React from 'react';
import ArrowBack from '../components/ArrowBack';
import '../pages/Event.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectVisibleEvents } from '../redux/selectors';

function Event() {
  const data = useSelector(selectVisibleEvents);

  const { eventId } = useParams();
  const event = data.find((event) => event.id.toString() === eventId);
  const deleteEvent=
  return (
    <div className="event-container">
      <ArrowBack />

      <div className="event-content-wrapper">
        <h1 className="event-title">{event.title}</h1>
        <div className="event-content">
          <img src={event.img} alt={event.title} className="event-img" />
          <p className="event-text">{event.body} </p>
          <div className="event-chips-wrapper">
            <p className="event-chip">{event.category}</p>
            <p className={`event-chip priority-${event.priority}`}>{event.priority}</p>
            <p className="event-chip">{event.location}</p>
            <p className="event-chip">{event.date}</p>
          </div>
          <div className="event-buttons-wrapper">
            <button type='button' className="event-button-edit">Edit</button>
            <button type='button' className="event-button-delete" onClick={deleteEvent}>Delete event</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
