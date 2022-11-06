import React from 'react';
import { useState } from 'react';

const Row = () => {
  const [show, setShow] = useState(true);

  const hideRow = () => {
    setShow(false);
  };

  return (
    <>
      {show ? (
        <li>
          <select>
            <option select>+</option>
            <option>-</option>
          </select>
          <input type="text" placeholder="100" />
          <button onClick={hideRow} className="buttons">
            Delete
          </button>
          <button className="buttons">Disable</button>
        </li>
      ) : null}
    </>
  );
};

export default Row;
