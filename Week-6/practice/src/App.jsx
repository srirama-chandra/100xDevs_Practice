import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("My Name Is Ram");

  function updateText(){
    setTitle(Math.random())
  }
  return(
    <div>
    <button onClick={updateText}>Update Text</button>
    <TextData inputValue={title}></TextData>
    <TextData inputValue={"Ramesh"}></TextData>
    <TextData inputValue={"Ramesh"}></TextData>
    <TextData inputValue={"Ramesh"}></TextData>
    </div>
  ) 
}

const TextData=React.memo(function TextData({inputValue})
{
  return (<div>My Name Is {inputValue}</div>)
});

export default App;
