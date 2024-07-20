import {BrowserRouter, Route,Routes } from 'react-router-dom'
import {Landing} from './components/Landing'
import {Dashboard} from './components/Dashboard'
import './App.css'

function App() {

  return (
    <div>
      <div style={{backgroundColor:"black", color:"white",textAlign:"center"}}> Header </div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
