import { RecoilRoot, useRecoilValue } from 'recoil'
import { todoAtomFamily } from './store/atoms';

function App() {
  return (
   <RecoilRoot>
    <div>
    <Todo id={1}></Todo>
    <Todo id={2}></Todo>
    <Todo id={3}></Todo>
   </div>
   </RecoilRoot>
  )
}

function Todo({id})
{
    const todoData=useRecoilValue(todoAtomFamily(id));

    return <div>{todoData.title}</div>
}

export default App
