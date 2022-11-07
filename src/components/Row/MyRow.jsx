import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './row.css';

const MyRow = () => {
  // Delete the row state
  const [showRow, setShowRow] = useState(true);
  // Disable the row state
  const [isDisabled, setIsDisabled] = useState(false);
  // Calculate sum state
  const [sum, setSum] = useState(0);

  // Input change handler
  const handleChange = (e) => {
    const { value, name } = e.target;
    // Check if the input is empty
    if (value === '') {
      setSum(0);
    } else {
      // Calculate the sum
      setSum((prevSum) => prevSum + parseInt(value));
    }
  };

  // Delete the row
  const deleteRow = (e) => {
    setShowRow(false);
  };

  // Toggle the disable classname on the list when the button is clicked
  const toggleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  // style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
  // you can’t interact with this element, or any children of this element, with a mouse, or a touch device, but it seems that you can still tab to it with your keyboard!!

  // ===> The solution would be maybe be to add a <fieldset disabled> around the row, and then every element in a disabled fieldset is disabled and you can’t interact with it at all, and it’s not tabbable either. It's also semantically correct.

  return (
    <>
      {showRow ? (
        <fieldset disabled={isDisabled ? 1 : 0}>
          <li className={isDisabled ? 'disabledButton' : null}>
            <select>
              <option>+</option>
              <option>-</option>
            </select>
            <input
              className="input"
              type="number"
              name="firstNumber"
              onChange={handleChange}
              placeholder="0"
            />

            <Button
              onClick={toggleDisable}
              className="buttons"
              variant="warning"
            >
              Disable
            </Button>

            <Button onClick={deleteRow} className="buttons" variant="danger">
              Delete
            </Button>
          </li>
        </fieldset>
      ) : null}
    </>
  );
};

export default MyRow;
