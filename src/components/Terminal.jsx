import { useState, useRef, useEffect } from "react";
import CommandHistory from "./CommandHistory";

function Terminal() {
  const [lines, setLines] = useState([]);
  const [command, setCommand] = useState("");
  const [autocompleteList, setAutocompleteList] = useState([]);
  const [activeAutocomplete, setActiveAutocomplete] = useState(0);

  const inputRef = useRef(null);
  const commandHistoryRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLines([
        ...lines,
        "LombaScript V1.0 ©2005-2023\n",
        "Loading portfolio...\n",
      ]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLines((prevState) => [
        ...prevState,
        "███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 30%\n",
        "Loading experience...\n",
      ]);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLines((prevState) => [
        ...prevState,
        "██████████░░░░░░░░░░░░░░░░░░░░░░░░░ 70%\n",
        "Loading skills...\n",
      ]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLines((prevState) => [
        ...prevState,
        "█████████████████████░░░░░░░░░░░░░░░ 90%\n",
        "\nWelcome to my portfolio!\n\n$",
      ]);
    };
    fetchData();
  }, [lines]);

  const handleCommandChange = (e) => {
    setCommand(e.target.value);
  };

	const handleCommandKeyDown = (e) => {
		if (e.key === "Enter") {
			if (command.trim() !== "") {
				setLines((prevState) => [        ...prevState,        `\n$ ${command}\n`,        "This is where the output of the command would go.\n\n$",      ]);
				if (commandHistoryRef.current) {
					commandHistoryRef.current.addCommand(command);
				}
				setCommand("");
			}
		} else if (e.key === "Tab") {
			e.preventDefault();
			const newAutocompleteList = ["help", "about", "portfolio", "skills"];
			setAutocompleteList(newAutocompleteList);
			setActiveAutocomplete(0);
			//showAutocomplete();
		} else if (e.key === "Escape") {
			e.preventDefault();
			//hideAutocomplete();
		}
	};

  return (
    <div className="terminal">
      <CommandHistory lines={lines} />
      <div className="input-container " style={ {display: 'flex'} }>
        <pre className="prompt" style={ {display: 'inline-block'} } >$</pre>
        <input
          type="text"
          value={command}
          onChange={handleCommandChange}
          onKeyDown={handleCommandKeyDown}
          ref={inputRef}
					style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: '1rem', lineHeight: '1.5', fontWeight: '400', display: 'inline-block'  }}
					placeholder="Escriba su comando aquí..."
					autoFocus
					className="ml-2"
        />
      </div>
    </div>
  );
}

export default Terminal;