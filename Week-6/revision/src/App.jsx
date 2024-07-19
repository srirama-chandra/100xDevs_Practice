import { useEffect, useState, memo,useCallback, useRef } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [incomeTax,setIncomeTax]=useState(20000);
  const divRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML="The Income Tax is 200";
    },3000)
  },[])
  return <div ref={divRef}>The Income Tax is {incomeTax}</div>
}
export default App
