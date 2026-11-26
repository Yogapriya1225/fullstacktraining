import React, { useState } from "react";

function Score() {
  const [runs, setRuns] = useState(0);
  const [wicket, setWicket] = useState(0);

  function addRuns(value) {
    setRuns(runs + value);
  }

  function addWicket() {
    if(wicket < 10){
    setWicket(wicket + 1);
  }
}

  function resetWicket(){
    setWicket(0);
  }
  return (
    <div>
      <h2>Display Score</h2>

      <h2>Runs: {runs}</h2>
      
      <button onClick={() => addRuns(0)}>0</button>
      <button onClick={() => addRuns(1)}>Add 1 run</button>
      <button onClick={() => addRuns(2)}>Add 2 runs</button>
      <button onClick={() => addRuns(3)}>Add 3 runs</button>
      <button onClick={() => addRuns(4)}>Add 4 runs</button>
      <button onClick={() => addRuns(6)}>Add 6 runs</button>

      <h2>Wicket: {wicket}</h2>
       {wicket == 10 && <h1>ALL OUT!</h1>}
      
      <button onClick={addWicket}>addwicket</button>
      <button onClick={resetWicket}>resettozero</button>
    </div>
  );
}

export default Score;