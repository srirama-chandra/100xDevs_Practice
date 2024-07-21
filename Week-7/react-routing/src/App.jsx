import React, { Suspense, useContext, useState } from 'react';
import { CountContext } from './context';

function App() {
  const [count,setCount]=useState(0);

  return (
    <div>
        <CountContext.Provider value={{count,setCount}}>
          <Count></Count>
        </CountContext.Provider>
    </div>
  )
}

function Count()
{
    return <div>
      <CountRender></CountRender>
      <Buttons></Buttons>
    </div>
}

function CountRender()
{
    const {count}=useContext(CountContext);
    return <div>{count}</div>
}

function Buttons()
{
  const {count,setCount}=useContext(CountContext);
    return <div>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
}



export default App
