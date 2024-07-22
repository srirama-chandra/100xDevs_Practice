import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';


function App() {

  return (
    <div>
        <RecoilRoot>
          <Count></Count>
        </RecoilRoot>
    </div>
  )
}

function Count()
{
    return <div>
      <CountRender></CountRender>
      <Buttons></Buttons>
    </div>
}

function CountRender()
{
    const count=useRecoilValue(countAtom);
    return <div>{count}</div>
}

function Buttons()
{
    const setCount=useSetRecoilState(countAtom);
    return <div>
      <button onClick={()=>setCount(count => count+1)}>Increase</button>
      <button onClick={()=>setCount(count => count-1)}>Decrease</button>
    </div>
}



export default App
