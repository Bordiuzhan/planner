import ArrowIcon from "../images/ArrowIcon";
import SortByIcon from "../images/SortByIcon";
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
    <div className={`wrapper-sort ${isOpen ? "active-sort" : ""}`}>
      <button onClick={toggleMenu} className="btn-sort">Sort By<SortByIcon/></button>
      {isOpen && (
        <div className="sort-menu">
          {options.map((option) => (
            <div className="sort-option"
              key={option.key}
              onClick={() => handleSortChange(option.value)}
            >
              {option.label}
              <ArrowIcon type={option.type}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortButton;
