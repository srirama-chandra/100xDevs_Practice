import { RecoilRoot , useRecoilValue, useRecoilValueLoadable } from "recoil";
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
    const todoData= useRecoilValueLoadable(todoAtomFamily(id));

    if(todoData.state === 'loading')
    {
      return <div> Loading </div>
    }
    else if(todoData.state === 'hasValue')
    {
      return <div> 
          <h1>{todoData.contents.title}</h1>
          <p>{todoData.contents.description}</p>
      </div>
    }
    else if(todoData.state==='hasError')
    {
      return <div>Error 404</div>
    }

    
}

export default App