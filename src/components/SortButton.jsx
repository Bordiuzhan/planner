import "./sortButton.css"
import  { useState } from "react";

const SortButton = ({ options, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (option) => {
    setIsOpen(false);
    onSortChange(option);
  };

  return (
    <div className="wrapper-sort">
      <button onClick={toggleMenu} className="btn-sort">Sort By</button>
      {isOpen && (
        <div className="sort-menu">
          {options.map((option) => (
            <div className="sort-option"
              key={option.key}
              onClick={() => handleSortChange(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortButton;
