import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import MyRow from '../Row/MyRow';

const Calculator = () => {
  // State for the rows
  const [rows, setRows] = useState([1]);

  // Add a new row
  const addRow = () => {
    setRows([...rows, 1]); // the 1 is just a placeholder
  };

  return (
    <>
      <div className="wrapper">
        <h1>CALCULATOR</h1>
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
      </div>
    </>
  );
};

export default Calculator;
