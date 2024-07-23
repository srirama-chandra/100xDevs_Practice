import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, isEven } from './store/atoms/count';


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
      <IsItEven></IsItEven>
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
function IsItEven()
{
    const IsEven=useRecoilValue(isEven);
    return <div>
      { IsEven ? "Even Number" : null}
    </div>
}



export default App
