import './categoryButton.css';
import { useState } from 'react';
import FilterIcon from '../images/FilterIcon';


const CategoryButton = ({ options, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setBtnName] = useState('Category');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (option) => {
    setIsOpen(false);
    setBtnName(option.label);
    onCategoryChange(option.value);
  };

  return (
    <div className={`wrapper-category ${isOpen ? "active-category" : ""}`}>
    
      <button onClick={toggleMenu} className="btn-category">
        {btnName}
        <FilterIcon/>
      </button>
      {isOpen && (
        <div className="category-menu">
          {options.map((option) => (
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
