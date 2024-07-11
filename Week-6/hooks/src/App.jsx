import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [number, setNumber] = useState(1);

  return(
    <div>
      <button onClick={()=>{setNumber(1)}}>1</button>
      <button onClick={()=>{setNumber(2)}}>2</button>
      <button onClick={()=>{setNumber(3)}}>3</button>
      <Todo id={number}></Todo>
    </div>
  )
  
}

function Todo({id}) {
  const [todos,setTodos]=useState({});

  useEffect(()=>{axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then(res=>setTodos(res.data.todo))},[id])

  return (
    <div>
      <h1>{todos.title}</h1>
      <p>{todos.description}</p>
    </div>
  )

}
export default App;
