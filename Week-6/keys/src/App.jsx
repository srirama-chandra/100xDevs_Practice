import React, { Fragment, useState } from "react";
function App() {
  const [todo, setTodos] = useState([
    { id: 1, title: "Go To Gym" },
    { id: 2, title: "Problem Solving" },
  ]);

  return (
    <div>
      {todo.map((e) => (
        <Todo key={e.id} title={e.title}></Todo>
      ))}
    </div>
  );
}

function Todo({ title }) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

export default App;
