import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import React, { useMemo } from 'react'
import { useCallback } from 'react';
import { useContext } from 'react';
import { countCountext } from '../context';
import { useRecoilState } from 'recoil';
import { countAtomFamily } from './store/atoms/countAtom';

function App() {
  
  const [todo,setTodo] = useRecoilState(countAtomFamily(2));
  console.log(todo)
  return <div>
    <div>{todo.id}</div>
    <div>{todo.title}</div>
  </div>

}



export default App
