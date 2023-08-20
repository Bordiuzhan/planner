import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SortButton from '../components/SortButton';
import CategoryButton from '../components/CategoryButton';
import EventList from '../components/EventList';
import '../pages/home.css';
import AddIcon from '../images/AddIcon';
import flowers from "../images/events/flowers.jpg"



const Home = () => {

  const [sortBy, setSortBy] = useState('');
  const [visiblePosts, setvisiblePosts] = useState([
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
  ]);

  const dataCategoryButton = [
    { key: 1, value: 'art', label: 'Art' },
    { key: 2, value: 'music', label: 'Music ' },
    { key: 3, value: 'business', label: 'Business' },
    { key: 4, value: 'conference', label: 'Conference' },
    { key: 5, value: 'workshop', label: 'Workshop' },
    { key: 6, value: 'party', label: 'Party' },
    { key: 7, value: 'sport', label: 'Sport' },
  ];
  const dataSortButton = [
    { key: 1, value: 'by name', label: 'by name', type: 'up' },
    { key: 2, value: 'by name', label: 'by name ', type: 'down' },
    { key: 3, value: 'by data', label: 'by data', type: 'up' },
    { key: 4, value: 'by data', label: 'by data ', type: 'down' },
    { key: 5, value: 'by priority', label: 'by priority', type: 'up' },
    { key: 6, value: 'by priority', label: 'by priority ', type: 'down' },
  ];
  const dataEvents = [
    {
      id: 1,
      title: 'Galery Opening',
      img: "https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg",
      body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
      location: 'Kyiv',
      date: '12.07 at 12:00',
      category: 'Art',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Music Concert',
      img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292540/paty_skoigv.jpg',
      body: 'Join us for a mesmerizing music concert featuring some of the best artists in the industry.',
      location: 'New York',
      date: '15.07 at 19:30',
      category: 'Conference',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Food Festival',
      img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292540/people_mrem7i.jpg',
      body: 'Indulge in a culinary journey at the grand food festival with a wide variety of delicacies.',
      location: 'Paris',
      date: '20.07 at 13:00',
      category: 'Workshop',
      priority: 'high',
    },
    {
      id: 4,
      title: 'Fashion Show',
      img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/glases_qiuwkn.jpg',
      body: 'Witness the latest fashion trends on the runway at our glamorous fashion show.',
      location: 'London',
      date: '25.07 at 18:00',
      category: 'Party',
      priority: 'low',
    },
    {
      id: 5,
      title: 'Tech Conference',
      img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292540/table_ordzc1.jpg',
      body: 'Stay updated with the latest technology trends and innovations at our tech conference.',
      location: 'San Francisco',
      date: '01.08 at 09:00',
      category: 'Business',
      priority: 'high',
    },
    {
      id: 6,
      title: 'Sports Event',
      img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292540/show_mn7aqr.jpg',
      body: 'Cheer for your favorite teams at our thrilling sports event featuring various games.',
      location: 'Tokyo',
      date: '08.08 at 15:00',
      category: 'Workshop',
      priority: 'medium',
    },
    {
      id: 7,
      title: 'Film Screening',
      img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292540/sky_hzdjn6.jpg',
      body: 'Experience the magic of cinema with a special screening of critically acclaimed films.',
      location: 'Los Angeles',
      date: '10.08 at 20:00',
      category: 'Music',
      priority: 'low',
    },
    {
      id: 8,
      title: 'Film Screening',
      img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292540/team_r9ongb.jpg',
      body: 'Experience the magic of cinema with a special screening of critically acclaimed films.',
      location: 'Los Angeles',
      date: '10.08 at 20:00',
      category: 'Sport',
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
    <div className='container'>
      <header className="header">
        <div className='header-wraper'>
          <p className="header-logo">Event Planner</p>
          <div className=" header-nav">
            <form className="search-form">
              <input
                type="text"
                placeholder="Search by keywords"
                className="search"
              />
            </form>
            <div className="wrapper-select">
              <select className="select">
                <option value="ua" className="select-one">
                  UK
                </option>
                <option value="en" className="select-one">
                  EN
                </option>
              </select>
            </div>
          </div>
        </div>
      </header>
      <main className="wrapper-main">
        <div className="main-nav">
          <h1 className="main-title">My events</h1>
          <div className="wrapper">
            <CategoryButton
              options={dataCategoryButton}
              onCategoryChange={handleCategoryChange}
            />

            <SortButton
              options={dataSortButton}
              onSortChange={handleSortChange}
            />
            <NavLink to="/create" className="nav-link">
              <AddIcon />
              Add new event
            </NavLink>
          </div>
        </div>
        <EventList data={dataEvents} />
      </main>
    </div>
  );
};

export default Home;
