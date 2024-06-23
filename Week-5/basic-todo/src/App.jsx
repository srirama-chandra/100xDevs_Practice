import { useState } from 'react'

function App() {

    const [todos,setTodo]=useState([{title:"Go To Gym",desc:"Gym Description"},{title:"DSA",desc:"DSA Description"},{title:"DSA",desc:"DSA Description"}]);

    return (
      <div>
            {todos.map((element)=>{
              return (
                <div>
                  <h3>{element.title}</h3>
                  <p>{element.desc}</p>
                </div>
              )
            })}
      </div>
    );

}

export default App
