import "./SortButton.css"
import  { useRef, useState } from "react";
import ArrowIcon from "../images/ArrowIcon";
import SortByIcon from "../images/SortByIcon";
import { useClickAway } from 'react-use';

const SortButton = ({ options, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const dataSortButton = [
    { key: 1, value: 'by name', label: 'by name', type: 'up' },
    { key: 2, value: 'by name', label: 'by name ', type: 'down' },
    { key: 3, value: 'by data', label: 'by data', type: 'up' },
    { key: 4, value: 'by data', label: 'by data ', type: 'down' },
    { key: 5, value: 'by priority', label: 'by priority', type: 'up' },
    { key: 6, value: 'by priority', label: 'by priority ', type: 'down' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (option) => {
    setIsOpen(false);
    onSortChange(option);
  };

  useClickAway(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div className={`wrapper-sort ${isOpen ? "active-sort" : ""}`}>
      <button onClick={toggleMenu} className="btn-sort">Sort By<SortByIcon/></button>
      {isOpen && (
        <div className="sort-menu"  ref={menuRef}>
          {dataSortButton.map((option) => (
            <div className="sort-option"
              key={option.key}
              onClick={() => handleSortChange(option)}
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
