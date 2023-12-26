import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='dropdown relative'>
        <button
          className='dropdown-button bg-primary w-full text-left font-semibold'
          onClick={() => setOpen(!open)}
        >
          Working Hours
        </button>
        {open == true ? (
          <ul className='dropdown-list'>
            <li>Today: </li>
            <li>Monday: </li>
            <li>Tuesday: </li>
            <li>Wednesday: </li>
            <li>Thursday: </li>
            <li>Friday: </li>
            <li>Saturday: </li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Dropdown;
