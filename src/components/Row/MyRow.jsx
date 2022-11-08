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
  // Input value state
  const [inputValue, setInputValue] = useState({
    firstInput: '',
    secondInput: '',
  });
  const [result, setResult] = useState('');
  // Sign state
  const [sign, setSign] = useState('+');

  // Sign change
  const handleSign = (e) => {
    setSign(e.target.value);
  };

  // Handle input change
  const handleInputValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });

    sumOfTwoInputs();
  };
  // Sum calculation function
  const sumOfTwoInputs = () => {
    if (sign === '+') {
      setResult(Number(inputValue.firstInput) + Number(inputValue.secondInput));
    } else {
      setResult(Number(inputValue.firstInput) - Number(inputValue.secondInput));
    }
    // console.log(result);
    // console.log(inputValue.firstInput);
    // console.log(inputValue.secondInput);
  };

  // Update the result on input change
  const handleResult = () => {
    sumOfTwoInputs();
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
        <fieldset className={isDisabled ? 'disabled disabledButton' : ''}>
          <li>
            <select>
              <option value="plus">+</option>
              <option value="minus">-</option>
            </select>
            {/* Create two inputs, get their value and sum them. Then show the sum in the result div */}
            <input
              type="number"
              name="firstInput"
              value={inputValue.firstInput}
              onChange={handleInputValue}
            />
            <input
              type="number"
              name="secondInput"
              value={inputValue.secondInput}
              onChange={handleInputValue}
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
        </fieldset>
      ) : null}
      {/* - The result must be updated "live" while the user is writing */}
      <Alert variant="success" className="result">
        Result:
      </Alert>
      <input type="number" value={result} onChange={handleResult} />
    </>
  );
};

export default MyRow;
