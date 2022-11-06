import Row from './Row';
import './calculator.css';
import { useState } from 'react';

function Home() {
  const [rows, setRows] = useState([1]);

  // Add a new row
  const addRow = () => {
    setRows([...rows, 1]);
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
          {rows.map((row) => (
            <Row key={row} />
          ))}
        </ul>
        <div className="result">Result: 123</div>
      </div>
    </>
  );
}

export default Home;
