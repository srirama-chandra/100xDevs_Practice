import { useEffect, useState, memo,useCallback } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count,setCount]=useState(0);
  
  let demo=useCallback(function demo()
  {
    console.log("Child Re-rendered");
  },[])

  return <div>
    <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
    <ChildComponent inputFunction={demo}></ChildComponent>
  </div>
}

let ChildComponent = memo(function ChildComponent({inputFunction})
{
    inputFunction();
    return <div>Child Component</div>
})

export default App
