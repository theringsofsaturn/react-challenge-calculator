import React from 'react';
import { useState } from 'react';

const Row = () => {
  // Delete the row state
  const [showRow, setShowRow] = useState(true);
  // Disable the row state
  const [disable, setDisable] = useState(false);

  // Disable the row when cliking on the button "disable"
  const disableRow = (e) => {
    setDisable(!disable);
  };

  // Delete the row
  const deleteRow = (e) => {
    setShowRow(false);
  };

  const pointerEvent = disable ? 'none' : 'auto';
  return (
    <>
      {showRow ? (
        <li style={{ pointerEvents: pointerEvent }}>
          <select>
            <option select>+</option>
            <option>-</option>
          </select>
          <input type="text" placeholder="100" />
          <button onClick={deleteRow} className="buttons">
            Delete
          </button>
          <button onClick={disableRow} className="buttons">
            Disable
          </button>
        </li>
      ) : null}
    </>
  );
};

export default Row;
