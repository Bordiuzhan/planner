import  './CategoryButton.css';
import { useRef, useState } from 'react';
import FilterIcon from '../images/FilterIcon';
import { useClickAway } from 'react-use';

const CategoryButton = ({ onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setBtnName] = useState('Category');
  const menuRef = useRef(null);

  const dataCategoryButton = [
    { key: 1, value: 'art', label: 'Art' },
    { key: 2, value: 'music', label: 'Music ' },
    { key: 3, value: 'business', label: 'Business' },
    { key: 4, value: 'conference', label: 'Conference' },
    { key: 5, value: 'workshop', label: 'Workshop' },
    { key: 6, value: 'party', label: 'Party' },
    { key: 7, value: 'sport', label: 'Sport' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (option) => {
    setIsOpen(false);
    setBtnName(option.label);
    onCategoryChange(option.value);
  };

  useClickAway(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div className={`wrapper-category ${isOpen ? 'active-category' : ''}`}>
      <button onClick={toggleMenu} className="btn-category">
        {btnName}
        <FilterIcon />
      </button>
      {isOpen && (
        <div className="category-menu" ref={menuRef}>
          {dataCategoryButton.map((option) => (
            <div
              className="category-option"
              key={option.key}
              onClick={() => handleCategoryChange(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryButton;
