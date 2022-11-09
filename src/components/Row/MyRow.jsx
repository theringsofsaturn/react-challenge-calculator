import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import './row.css';

const MyRow = () => {
  // Delete the row state
  const [showRow, setShowRow] = useState(true);
  // Disable the row state
  const [isDisabled, setIsDisabled] = useState(false);
  // Input value state for firstInput
  const [firstInput, setFirstInput] = useState('');
  // Input value state for secondInput
  const [secondInput, setSecondInput] = useState('');
  // Result state
  const [result, setResult] = useState(0);
  // Sign state
  const [sign, setSign] = useState('+');

  // To make the result input auto-update live, will add the value that is changing with the value that hasn't change yet and set the new result when I update either one of the numbers.

  // Handle input change firstInput
  const handleChangeFirstInput = (e) => {
    setFirstInput(e.target.value);
    setResult(parseInt(e.target.value) + parseInt(secondInput));
  };

  // Handle input change secondInput
  const handleChangeSecondInput = (e) => {
    setSecondInput(e.target.value);
    setResult(parseInt(e.target.value) + parseInt(firstInput));
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
      {/* Delete row when showRow is false  */}
      {showRow ? (
        /* Hide row when isDisabled is true */
        <fieldset disabled={isDisabled}>
          <li>
            {/* Create two inputs, get their value and sum them. Then show the sum in the result div */}
            <input
              className="input"
              type="number"
              placeholder="0"
              name="firstInput"
              value={firstInput}
              onChange={handleChangeFirstInput}
            />
            <select>
              <option value="plus">+</option>
              <option value="minus">-</option>
            </select>
            <input
              className="input"
              type="number"
              placeholder="0"
              name="secondInput"
              value={secondInput}
              onChange={handleChangeSecondInput}
            />
            <Button
              onClick={toggleDisable}
              className="buttons"
              variant="warning"
            >
              {isDisabled ? 'Enable' : 'Disable'}
            </Button>
            <Button onClick={deleteRow} className="buttons" variant="danger">
              Delete
            </Button>
          </li>
          {/* The result must be another input and should update "live" while the user is writing in the inputs */}

          <Alert className="result" variant="success">
            Live Result:
          </Alert>

          <input
            className="input"
            type="number"
            placeholder="0"
            name="result"
            value={result}
            readOnly
          />
        </fieldset>
      ) : null}
    </>
  );
};

export default MyRow;
