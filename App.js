import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(true);

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

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className={darkMode ? "calculator-container dark" : "calculator-container light"}>
      <div className="mode-toggle">
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleMode} />
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </label>
      </div>
      <input className="display" type="text" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={btn === "=" ? "equals" : btn === "C" ? "clear" : ""}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
