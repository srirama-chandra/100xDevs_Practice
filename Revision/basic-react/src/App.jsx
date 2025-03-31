import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex '>
          <div className='h-10 w-10 flex justify-center items-center bg-green-500'>1</div>
          <div className='h-10 w-10 flex justify-center items-center bg-red-500'>2</div>
          <div className='h-10 w-10 flex justify-center items-center bg-yellow-500'>3</div>
          <div className='h-10 w-10 flex justify-center items-center bg-violet-500'>4</div>
    </div>
  )
}


export default App
