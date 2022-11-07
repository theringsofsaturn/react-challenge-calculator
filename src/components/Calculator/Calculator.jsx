/*  
React Challenge: Calculator

write a simple React calculator (adder) so that has the following mandatory
functionalities:
 
- The row with list elements (with select options, input, button disable and button delete) can be added and removed
- Each row with list elements have a sign (minus or plus)
- Each row with list elements can be enabled or disabled by a dedicated control button
- Disabled rows must be excluded from the addition
- The result must be updated "live" while the user is writing
*/

import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import MyRow from '../Row/MyRow';

const Calculator = () => {
  // State for the rows
  const [rows, setRows] = useState([1]);
  // Addition between two rows input state
  const [sum, setSum] = useState(0);

  // Add a new row
  const addRow = () => {
    setRows([...rows, 1]); // the 1 is just a placeholder
  };

  // style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
  // with pointerEvents there are two issues:
  // 1. It won't let me toggle the disabled state on and off
  // 2. you can’t interact with this element, or any children of this element, with a mouse, or a touch device, but it seems that you can still tab to it with your keyboard!!

  // ===> The solution would be maybe be to add a <fieldset disabled> around the row, and then every element in a disabled fieldset is disabled and you can’t interact with it at all, and it’s not tabbable either. It's also semantically correct.

  return (
    <>
      <div className="wrapper">
        <div>
          <Button onClick={addRow} className="add-button" variant="primary">
            Add Row
          </Button>
        </div>
        <ul>
          {rows.map((row, i) => (
            <MyRow key={i} />
          ))}
        </ul>
        <div className="result">
          <Alert className="result center-block" variant="success">
            Result: {sum}
          </Alert>
        </div>
      </div>
    </>
  );
};

export default Calculator;
