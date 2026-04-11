import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sender from './pages/Sender'
import Receiver from './pages/Receiver'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sender' element={<Sender/>}></Route>
        <Route path='/receiver' element={<Receiver/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
