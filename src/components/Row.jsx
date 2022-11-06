import React from 'react';
import { useState } from 'react';
import './row.css';

const Row = () => {
  // Delete the row state
  const [showRow, setShowRow] = useState(true);
  // Disable the row state
  const [isDisabled, setIsDisabled] = useState(false);

  // Toggle the disable classname on the list when the button is clicked
  const toggleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  // Delete the row
  const deleteRow = (e) => {
    setShowRow(false);
  };

  // style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
  // you can’t interact with this element, or any children of this element, with a mouse, or a touch device, but you can still tab to it with your keyboard. ?!!

  return (
    <>
      {showRow ? (
        <li className={isDisabled ? 'disabledButton' : null}>
          <select>
            <option>+</option>
            <option>-</option>
          </select>
          <input type="text" placeholder="" />
          <button onClick={deleteRow}>Delete</button>
          <button onClick={toggleDisable}>Disable</button>
          <button>Unable</button>
        </li>
      ) : null}
    </>
  );
};

export default Row;
