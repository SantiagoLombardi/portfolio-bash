import React from "react";

const TerminalLine = ({ directory, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <div className="terminal-line">
      <span className="terminal-prompt">{`$${directory} `}</span>
      <input
        className="terminal-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSubmit();
          }
        }}
      />
    </div>
  );
};


export default TerminalLine;
