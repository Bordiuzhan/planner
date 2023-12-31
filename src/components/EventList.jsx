import { Link } from 'react-router-dom';
import './eventList.css';

function EventList({ data }) {


  return (
    <div className='card-list-wrapper'>
      <ul className="card-list">
        {data.map((event) => (
          <li key={event.id} className="card-item">
            <div className="card-img-wrapper">
              <img src={event.img} alt=" event" className="card-img" />
              <div className="mark-height">
                <span className="mark-category">{event.category}</span>
                <span className={`mark-priority priority-${event.priority}`}>{event.priority}</span>
              </div>
            </div>
            <div className="card-content">
              <div className="mark-down">
                <span className="time">{event.date}</span>
                <span className="location">{event.location}</span>
              </div>
              <h3 className="card-title">{event.title}</h3>
              <p className="card-body">{event.body}</p>
              <div className="card-more">
                <Link to={`/event/${event.id}`}  className="button-more">
                  More info
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
