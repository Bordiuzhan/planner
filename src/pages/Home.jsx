import '../pages/home.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SortButton from '../components/SortButton';
import CategoryButton from '../components/CategoryButton';

import AddIcon from '../images/AddIcon';
import PaginatedItems from '../components/Pagination';
import { useSelector } from 'react-redux';
import { selectVisibleEvents } from '../redux/selectors';

const Home = () => {
  const [sortBy, setSortBy] = useState('');
  const [initialPosts] = useState(useSelector(selectVisibleEvents || []));
  const [visiblePosts, setVisiblePosts] = useState(initialPosts);

  const handleSortChange = (option) => {
    setSortBy(option);
    let sortedData = [...visiblePosts];

    if (option.value === 'by name') {
      if (option.type === 'up') {
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
      } else if (option.type === 'down') {
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
      }
    }

    if (option.value === 'by data') {
      if (option.type === 'up') {
        sortedData.sort((a, b) => a.date - b.date);
      } else if (option.type === 'down') {
        sortedData.sort((a, b) => b.date - a.date);
      }
    }

    if (option.value === 'by priority') {
      const priorityOrder = ['high', 'medium', 'low'];
      if (option.type === 'up') {
        sortedData.sort((a, b) => {
          const priorityIndexA = priorityOrder.indexOf(a.priority);
          const priorityIndexB = priorityOrder.indexOf(b.priority);
          return priorityIndexA - priorityIndexB;
        });
      } else if (option.type === 'down') {
        sortedData.sort((a, b) => {
          const priorityIndexA = priorityOrder.indexOf(a.priority);
          const priorityIndexB = priorityOrder.indexOf(b.priority);
          return priorityIndexB - priorityIndexA;
        });
      }
    }
    setVisiblePosts(sortedData);
  };

  const handleCategoryChange = (option) => {
    setSortBy(option);
    const sortedData = [...initialPosts];
    let data;
    switch (option) {
      case 'art':
        data = sortedData.filter((a) => a.category.toLowerCase() === option);
        break;
      case 'music':
        data = sortedData.filter((a) => a.category.toLowerCase() === option);
        break;
      case 'business':
        data = sortedData.filter((a) => a.category.toLowerCase() === option);
        break;
      case 'conference':
        data = sortedData.filter((a) => a.category.toLowerCase() === option);
        break;
      case 'workshop':
        data = sortedData.filter((a) => a.category.toLowerCase() === option);
        break;
      case 'party':
        data = sortedData.filter((a) => a.category.toLowerCase() === option);
        break;
      case 'sport':
        data = sortedData.filter((a) => a.category.toLowerCase() === option);
        break;
      default:
        data = sortedData;
        break;
    }
    setVisiblePosts(data);
  };

  return (
    <>
      <main className="wrapper-main">
        <div className="main-nav">
          <h1 className="main-title">My events</h1>
          <div className="wrapper">
            <CategoryButton onCategoryChange={handleCategoryChange} />

            <SortButton onSortChange={handleSortChange} />
            <NavLink to="/create" className="nav-link">
              <AddIcon />
              Add new event
            </NavLink>
          </div>
        </div>
        <div id="container">
          <PaginatedItems itemsPerPage={8} items={visiblePosts} />
        </div>
      </main>
    </>
  );
};

export default Home;
