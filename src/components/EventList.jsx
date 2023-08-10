
function EventList({data}) {
  return (
    <div>
          <ul>
            {data.map((event) => (
              <li key={event.id}>
                <img src={event.img} alt="" width="100px" height="100"/>
                <h3>{event.title}</h3>
                <p>{event.body}</p>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default EventList
