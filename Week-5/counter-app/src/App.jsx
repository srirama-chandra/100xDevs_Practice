import { useState } from 'react'

function App() {

  const [count,setCount]=useState(0);

  function clickHandler(){
    setCount(count+1);
  }

  return (
    <div>
        <button onClick={clickHandler}>Count {count}</button>
    </div>
  )
}

export default App
