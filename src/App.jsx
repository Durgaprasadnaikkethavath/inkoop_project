import React from "react";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [nextNumber, setNextNumber] = useState([]);

  const handleInputChanges = (e) => {
    const value = e.target.value;

    if (!/^-?\d*$/.test(value)) {
      return;
    }

    setInputValue(value);

    if (value === "") {
      setMessage("");
      setNextNumber([]);
      return;
    }

    const number = parseInt(value, 10);

    if (number < 0) {
      setMessage("Enter a positive value");
      setNextNumber([]);
    } else if (number % 2 === 0) {
      setMessage("Even Number");
      setNextNumber([number + 2, number + 4, number + 6]);
    } else {
      setMessage("Odd Number");
      setNextNumber([number + 2, number + 4, number + 6]);
    }
  };
  return (
    <>
      <div className="number_container">
        <div className="number_box">
          <div>
            <h1 className="number_heading">Number Checker</h1>
            <div className="number_input">
              <input
                type="number"
                placeholder="Enter a number"
                value={inputValue}
                onChange={handleInputChanges}
              />
            </div>
            {message && <p>{message}</p>}
            {nextNumber.length > 0 && (
              <div>
                <p className="next_three_numbers">Next 3 Numbers: </p>
                <ul className="total_numbers">
                  {nextNumber.map((num, index) => (
                    <li key={index} className="display_numbers">
                      {num}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
