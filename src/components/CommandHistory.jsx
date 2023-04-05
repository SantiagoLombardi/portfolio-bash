import React from "react";

const CommandHistory = ({ history}) => {
  const outputPre = "> ";
  return (
    <div className='text-gray-500 flex flex-col ' >
      {history?
        <div className="flex flex-row">
          {outputPre}
          <p  style={{marginLeft: '8px'}} className="w-[calc(100% - 3ch)]">{history}...</p>
          <br />
        </div> 
      : null}
    </div>
  );
};

export default CommandHistory;
