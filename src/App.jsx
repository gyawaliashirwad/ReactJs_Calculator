import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <h1 className="calculator-title"> Calculator</h1>
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => handleClick(num.toString())}>
              {num}
            </button>
          ))}

          {["+", "-", "*", "/"].map((operator) => (
            <button key={operator} onClick={() => handleClick(operator)}>
              {operator}
            </button>
          ))}

          <button onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleClick("=")}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
