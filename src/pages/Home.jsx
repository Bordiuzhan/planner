import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../pages/home.css';

import SortButton from '../components/SortButton';
import CategoryButton from '../components/CategoryButton';

import AddIcon from '../images/AddIcon';
import PaginatedItems from '../components/Pagination';



const Home = ({data}) => {
  console.log("data", data);

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
    <>
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
        <div id="container">
        <PaginatedItems itemsPerPage={8} items={data} />
        </div>
      </main>
    </>
  );
};

export default Home;
