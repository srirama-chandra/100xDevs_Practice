import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Signin } from './components/Signin'
import { Dashboard } from './components/Dashboard'
import { SendMoney } from './components/SendMoney'

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/send' element={<SendMoney/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
