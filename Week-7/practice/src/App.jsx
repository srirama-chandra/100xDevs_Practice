import React, { useContext, useState } from "react";
import { CountContext } from "./components/count";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count></Count>
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  const { count } = useContext(CountContext);
  return (
    <div>
      {count}
      <Buttons></Buttons>
    </div>
  );
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
