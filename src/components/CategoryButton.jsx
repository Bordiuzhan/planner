import  { useState } from "react";

const CategoryButton = ({ options, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setBtnName] = useState("Category");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (option) => {
    setIsOpen(false);
    setBtnName(option.label)
    onCategoryChange(option.value);
  };

  return (
    <div>
      <button onClick={toggleMenu}>{btnName}</button>
      {isOpen && (
        <div className="sort-menu">
          {options.map((option) => (
            <div
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
