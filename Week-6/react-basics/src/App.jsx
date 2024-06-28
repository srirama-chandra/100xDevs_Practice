import React,{Fragment, useState} from "react";
function App() {

  return (
   <>
      <RenderingHeader></RenderingHeader>
      <Header title="harkirat"></Header>
      <Header title="Ramesh"></Header>
   </>
  )
}
function RenderingHeader(){

  const [title,setTitle]=useState("Ram");

  function updateText(){
    setTitle("My Name Is "+Math.random());
  }
  
  return( 
  <div>
  <button onClick={updateText}>UpdateData</button>
  <Header title={title}></Header>
  </div>)
}

function Header(props){
  return <div>{props.title}</div>
}

export default App;
