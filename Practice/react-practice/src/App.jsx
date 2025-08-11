import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Routes, useSearchParams } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Landing()
{
  return(
    <div>
      <div>Landing</div>
      <Link to={'/signin?id=1'}>Signin</Link>
    </div>
  )
}

function Signin()
{
  const [params,setParams] = useSearchParams();
  console.log(params.get("id"))
  return (
    <div>Signin</div>
  )
}

export default App
