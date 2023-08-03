import { useState } from 'react';
import SortButton from '../components/SortButton';
import CategoryButton from '../components/CategoryButton';

const Home = () => {
  const [sortBy, setSortBy] = useState('');
  const [visiblePosts, setvisiblePosts] = useState([
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
  ]);

  const dataSortButton = [
    { key: 1, value: 'by name', label: 'by name ↑' },
    { key: 2, value: 'by name', label: 'by name ↓ ' },
    { key: 3, value: 'by data', label: 'by data ↑' },
    { key: 4, value: 'by data', label: 'by data ↓ ' },
    { key: 5, value: 'by priority', label: 'by priority ↑' },
    { key: 6, value: 'by priority', label: 'by priority ↓ ' },
  ];
  const dataCategoryButton = [
    { key: 1, value: 'art', label: 'Art' },
    { key: 2, value: 'music', label: 'Music ' },
    { key: 3, value: 'business', label: 'Business' },
    { key: 4, value: 'conference', label: 'Conference' },
    { key: 5, value: 'workshop', label: 'Workshop' },
    { key: 6, value: 'party', label: 'Party' },
    { key: 7, value: 'sport', label: 'Sport' },
  ];
  const dataEvents = [
    {
      id: 1,
      title: 'Galery Opening',
      img: 'https://example.com/gallery-opening.jpg',
      body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
      location: 'Kyiv',
      date: '12.07 at 12:00',
      category: 'art',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Music Concert',
      img: 'https://example.com/music-concert.jpg',
      body: 'Join us for a mesmerizing music concert featuring some of the best artists in the industry.',
      location: 'New York',
      date: '15.07 at 19:30',
      category: 'music',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Food Festival',
      img: 'https://example.com/food-festival.jpg',
      body: 'Indulge in a culinary journey at the grand food festival with a wide variety of delicacies.',
      location: 'Paris',
      date: '20.07 at 13:00',
      category: 'food',
      priority: 'high',
    },
    {
      id: 4,
      title: 'Fashion Show',
      img: 'https://example.com/fashion-show.jpg',
      body: 'Witness the latest fashion trends on the runway at our glamorous fashion show.',
      location: 'London',
      date: '25.07 at 18:00',
      category: 'fashion',
      priority: 'low',
    },
    {
      id: 5,
      title: 'Tech Conference',
      img: 'https://example.com/tech-conference.jpg',
      body: 'Stay updated with the latest technology trends and innovations at our tech conference.',
      location: 'San Francisco',
      date: '01.08 at 09:00',
      category: 'technology',
      priority: 'high',
    },
    {
      id: 6,
      title: 'Sports Event',
      img: 'https://example.com/sports-event.jpg',
      body: 'Cheer for your favorite teams at our thrilling sports event featuring various games.',
      location: 'Tokyo',
      date: '08.08 at 15:00',
      category: 'sports',
      priority: 'medium',
    },
    {
      id: 7,
      title: 'Film Screening',
      img: 'https://example.com/film-screening.jpg',
      body: 'Experience the magic of cinema with a special screening of critically acclaimed films.',
      location: 'Los Angeles',
      date: '10.08 at 20:00',
      category: 'film',
      priority: 'low',
    },
  ];

  const handleSortChange = (option) => {
    setSortBy(option);
    let sortedData = [...visiblePosts];
    if (option === 'by name') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'by data') {
      sortedData.sort((a, b) => a.age - b.age);
    }
    console.log('Sorted Data: ', sortedData);
  };
  const handleCategoryChange = (option) => {
    setSortBy(option);
    let sortedData = [...visiblePosts];
    if (option === 'by name') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'by data') {
      sortedData.sort((a, b) => a.age - b.age);
    }
    console.log('Sorted Data: ', sortedData);
  };

  return (
    <div>
      <header>
        <p>Event Planner</p>
        <form>
          <input type="text" placeholder="Search by keywords" />
        </form>
        <select>
          <option value="ua">UK</option>
          <option value="en">EN</option>
        </select>
      </header>
      <main>
        <h1>My events</h1>
        <div>
          <SortButton
            options={dataSortButton}
            onSortChange={handleSortChange}
          />
          <CategoryButton
            options={dataCategoryButton}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div>
          <ul>
            {dataEvents.map((dataEvent) => (
              <li key={dataEvent.id}>
                <img src={dataEvent.img} alt="" width="100px" height="100"/>
                <h3>{dataEvent.title}</h3>
                <p>{dataEvent.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
