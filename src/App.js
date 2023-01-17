import "./App.css";
import React, { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    // console.log()
    return counter % 2 === 0;
  }, [counter]);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <h1>{counter1}</h1>

      <button onClick={() => setCounter(counter + 1)}>INC</button>
      <span>{isEven ? "Even" : "ODD"}</span>
      <button onClick={() => setCounter1(counter1 + 1)}>DEC</button>
    </div>
  );
}

export default App;
