const CommandHistory = ({ commandHistory }) => {
  return (
    <div>
      {commandHistory.map(({ command, output }, index) => (
        <div key={index}>
          <span className="prompt">$</span> {command}
          <br />
          {output}
        </div>
      ))}
    </div>
  );
};

export default CommandHistory;