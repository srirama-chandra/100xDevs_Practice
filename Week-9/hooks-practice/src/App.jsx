import { useEffect, useState } from 'react'
import './App.css'

function useMouseLocation()
{ 
    const [mouseLocation,setMouseLocation] = useState({x:0,y:0});
    useEffect(()=>{
      window.addEventListener('mousemove',(e) => setMouseLocation({x:e.clientX,y:e.clientY}));
    },[])
    return mouseLocation;
}

function App() {

    const mousePointer = useMouseLocation();

    return <div>Mouse {mousePointer.x} : {mousePointer.y}</div>
}


export default App
