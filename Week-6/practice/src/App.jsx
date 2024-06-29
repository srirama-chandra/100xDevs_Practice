import { useState } from "react";

function App() {
  
  return(
    <>
    <DynamicButton></DynamicButton>
    <TextData inputValue={"Ramesh"}></TextData>
    <TextData inputValue={"Ramesh"}></TextData>
    <TextData inputValue={"Ramesh"}></TextData>
    </>
  ) 
}
function DynamicButton()
{
  const [title, setTitle] = useState("My Name Is Ram");
  function updateText(){
    setTitle(Math.random())
  }
  return (
    <>
    <button onClick={updateText}>Update Text</button>
    <TextData inputValue={title}></TextData>
    </>
  )
}
function TextData({inputValue})
{
  return (<div>My Name Is {inputValue}</div>)
}

export default App;
