import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos").then((res)=>setTodos(res.data.todos));
  },[]);

  return (
    <div>
        {todos.map((e)=> <Todo title={e.title} description={e.description}></Todo>)}
    </div>
  )
}

function Todo({title,description}){
    return (<div><h1>{title}</h1><p>{description}</p></div>)
}
export default App
