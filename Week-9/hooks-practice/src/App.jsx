import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [render, setRender] = useState(true);

  useEffect(()=>{

    setInterval(() => setRender(r => !r),5000);

  },[])

  return (
    <>
        { render ? <MyComponent/> : <div></div>}
    </>
  )
}

function MyComponent()
{
    useEffect(()=>{

      console.log("Component Mounted");

      return ()=>{
        console.log("Component Unmounted");
      }
    },[]);


    return <div> My Component</div>
}

export default App
