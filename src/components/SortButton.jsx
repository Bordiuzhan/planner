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
    <div>
      <button onClick={toggleMenu}>Sort By</button>
      {isOpen && (
        <div className="sort-menu">
          {options.map((option) => (
            <div
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
