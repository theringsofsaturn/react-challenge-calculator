import Row from '../Row/Row';
import './calculator.css';
import { useState } from 'react';

function Home() {
  const [rows, setRows] = useState([1]);

  // Add a new row
  const addRow = () => {
    setRows([...rows, 1]); // the 1 is just a placeholder
  };

  return (
    <>
      <div className="wrapper">
        <div>
          <button onClick={addRow} className="add-button">
            Add row
          </button>
        </div>
        <ul className="lists">
          {rows.map((row, i) => (
            <Row key={i} />
          ))}
        </ul>
        <div className="result">Result: 123</div>
      </div>
    </>
  );
}

export default Home;
