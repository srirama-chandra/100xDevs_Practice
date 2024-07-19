import { useEffect, useState, memo,useCallback, useRef } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [incomeTax,setIncomeTax]=useState(20000);

  useEffect(()=>{
    setTimeout(()=>{
      let divRef=useRef();
      divRef.current.inn
    })
  })
  return <div ref={divRef}>The Income Tax is {incomeTax}</div>
}

export default App
