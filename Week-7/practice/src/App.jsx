import { RecoilRoot , useRecoilValue } from "recoil";
import { todoAtomFamily } from './store/atoms/count'

function App() {
  return (
    <div>
      <RecoilRoot> 
          <Todo id={1}></Todo>  
          <Todo id={2}></Todo>
          <Todo id={2}></Todo>
      </RecoilRoot>
    </div>
  )
}

function Todo({id})
{
    const todoData= useRecoilValue(todoAtomFamily(id));

    return <div> 
      <h1>{todoData.title}</h1>
      <p>{todoData.description}</p>
    </div>
}

export default App