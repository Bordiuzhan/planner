import React, { useRef, useState } from 'react';
import './CustomSelect.css';
import AngleBracket from '../images/AngleBracket';
import { useClickAway } from 'react-use';

function CustomSelect({ title, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
  };

  useClickAway(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <>
      <label className="label">
        <p>{title}</p>
        <input
          value={value}
          onClick={toggleMenu}
          name="category"
          placeholder="Select Priority"
          readOnly={true}
        ></input>
        <div className={`container-svg ${isOpen ? '' : 'hidden'}`}>
          <AngleBracket type={'up'} />
        </div>
        <div className={`container-svg ${isOpen ? 'hidden' : ''}`} >
          <AngleBracket type={'down'} />
        </div>
        {isOpen && (
          <div className="select-options" ref={menuRef}>
            {options.map((option) => (
              <div
                className="select-option"
                key={option.key}
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </label>
    </>
  );
}

export default CustomSelect;
