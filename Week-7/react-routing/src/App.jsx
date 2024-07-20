import React, { Suspense } from 'react';
import {BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom'

const Dashboard=React.lazy(()=>import("./components/Dashboard"));
const Landing=React.lazy(()=>import("./components/Landing"));

function App() {

  return (
    <div>

      <BrowserRouter>

        <HeaderComponent></HeaderComponent>

        <Routes>
          <Route path='/' element={<Suspense fallback={"Loading"}><Landing /></Suspense>}></Route>
          <Route path='/dashboard' element={<Suspense fallback={"Loading"}><Dashboard /></Suspense>}></Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

function HeaderComponent()
{
  const navigate=useNavigate();
  return(
  <div>
    <button onClick={()=>navigate("/")}>Landing</button>
    <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
  </div>)
}

export default App
