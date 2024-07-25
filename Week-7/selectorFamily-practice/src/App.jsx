import { RecoilRoot, useRecoilValue } from 'recoil'
import { todoAtomFamily } from './store/atoms';

function App() {
  return (
   <RecoilRoot>
    <div>
    <Todo id={1}></Todo>
    <Todo id={2}></Todo>
    <Todo id={3}></Todo>
    <Todo id={3}></Todo>
   </div>
   </RecoilRoot>
  )
}

function Todo({id})
{
    const todoData=useRecoilValue(todoAtomFamily(id));

    return <div> <div>{todoData.title}</div> <div>{todoData.description}</div> </div>
}

export default App
