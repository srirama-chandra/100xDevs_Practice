import {BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom'
import {Landing} from './components/Landing'
import {Dashboard} from './components/Dashboard'
import './App.css'

function App() {

  return (
    <div>

      <BrowserRouter>

        <HeaderComponent></HeaderComponent>

        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
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
