import axios from "axios";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};


export default async function Todos()
{
    const response = await fetch('http://localhost:3005/todos',{cache:'no-cache'});
    const data = await response.json();
    const todos = data.todos;

    return(
        <div>
            {todos.map((todo:Todo) => {
                return <div key={todo.id}>{todo.id} {todo.title}</div>
            })}
        </div>
    )
}