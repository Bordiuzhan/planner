import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import Event from './pages/Event';
import Layout from './pages/Layout';
import { useEffect, useState } from 'react';

const dataEvents = [
  {
    id: 1,
    title: 'Galery Opening',
    img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg',
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
  {
    id: 9,
    title: 'Galery Opening',
    img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg',
    body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    location: 'Kyiv',
    date: '12.07 at 12:00',
    category: 'Art',
    priority: 'high',
  },
  {
    id: 10,
    title: 'Galery Opening',
    img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg',
    body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    location: 'Kyiv',
    date: '12.07 at 12:00',
    category: 'Art',
    priority: 'high',
  },
  {
    id: 11,
    title: 'Galery Opening',
    img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg',
    body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    location: 'Kyiv',
    date: '12.07 at 12:00',
    category: 'Art',
    priority: 'high',
  },
  {
    id: 12,
    title: 'Galery Opening',
    img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg',
    body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    location: 'Kyiv',
    date: '12.07 at 12:00',
    category: 'Art',
    priority: 'high',
  },
  {
    id: 13,
    title: 'Galery Opening',
    img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg',
    body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    location: 'Kyiv',
    date: '12.07 at 12:00',
    category: 'Art',
    priority: 'high',
  },
  {
    id: 14,
    title: 'Galery Opening',
    img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg',
    body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    location: 'Kyiv',
    date: '12.07 at 12:00',
    category: 'Art',
    priority: 'high',
  },
  {
    id: 15,
    title: 'Galery Opening',
    img: 'https://res.cloudinary.com/dw8vkzfdu/image/upload/v1692292541/flowers_m9dc55.jpg',
    body: 'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    location: 'Kyiv',
    date: '12.07 at 12:00',
    category: 'Art',
    priority: 'high',
  },
];

function App() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const storageItems = JSON.parse(await localStorage.getItem('event'));
  //     if (storageItems) {
  //       setData(storageItems);
  //       return;
  //     }
  //     await localStorage.setItem('event', JSON.stringify(dataEvents));
  //     fetchData();
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/create" element={<CreateEvent />}></Route>
          <Route path="/event/:eventId" element={<Event />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
