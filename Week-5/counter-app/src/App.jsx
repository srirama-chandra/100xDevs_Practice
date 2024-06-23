import { useState } from 'react'

function App() {

  const [count,setCount]=useState(0);

  return (
    <div>
        <ButtonComponenet count={count} setCount={setCount} ></ButtonComponenet>
    </div>
  );
}

function ButtonComponenet(props){

  function clickHandler(){
    props.setCount(props.count+1);
  }

  return (
    <button onClick={clickHandler}>count {props.count} </button>
  )
}

export default App
