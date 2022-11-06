// import { useState } from 'react';
import { useState } from 'react';
import './calculator.css';

function Home() {
  const [show, setShow] = useState(true);

  // Toggle the visibility of the calculator
  const toggleShow = () => setShow(!show);

  return (
    <>
      <div className="wrapper">
        <div>
          <button className="add-button">Add row</button>
          <button className="toggle-button" onClick={toggleShow}>
            Toggle
          </button>
        </div>
        <ul className="lists">
          {show ? (
            <li>
              <select>
                <option select>+</option>
                <option>-</option>
              </select>
              <input type="text" placeholder="100" />
              <button onClick={toggleShow} className="buttons">
                Delete
              </button>
              <button className="buttons">Disable</button>
            </li>
          ) : null}
        </ul>
        <div className="result">Result: 123</div>
      </div>
    </>
  );
}

export default Home;
