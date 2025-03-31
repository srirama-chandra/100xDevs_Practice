import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupFormDemo from './components/signup-form-demo'
import BlogLandingPage from './components/BlogLandingPage'

function App() {

  return (
    <div className='h-dvh'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<BlogLandingPage/>}></Route>
          <Route path='/signup' element={<SignupFormDemo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
