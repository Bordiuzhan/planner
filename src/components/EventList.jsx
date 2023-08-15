import './eventList.css';

function EventList({ data }) {
  return (
    <div>
      <ul className='card-list'>
        {data.map((event) => (
          <li key={event.id} className='card-item'>
            <div className="back-img">
              <div className='mark-height'>
                <span className='mark-category'>Art</span>
                <span className='mark-priority'>High</span>
              </div>
              <div className='mark-down'>
                <span className='time'>12 07 at 12:00</span>
                <span className='location'>Kyiv</span>
              </div>
            </div>
            <h3 className='card-title'>{event.title}</h3>
            <p className='card-body'>{event.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
