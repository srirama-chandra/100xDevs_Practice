import { RecoilRoot , useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todoAtomFamily } from './store/atoms/count'
import { Suspense } from "react";

function App() {
  return (
    <div>
      <RecoilRoot> 
         <Suspense fallback={"Loading"}>
          <Todo id={1}></Todo>  
          <Todo id={2}></Todo>
          <Todo id={2}></Todo>
         </Suspense>
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