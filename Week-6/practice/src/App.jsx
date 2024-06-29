import React, { useState } from "react";

function App() {
    return (
      <>
      <WrapperComponent><TextComponent input={"Hi There"}></TextComponent></WrapperComponent>
      <WrapperComponent><TextComponent input={"Hello"}></TextComponent></WrapperComponent>
      </>
    )
}

function WrapperComponent({children})
{
    return (
      <div style={{border:"1px solid red"}}>
        {children}
      </div>
    )
}
function TextComponent({input})
{
  return (<div>{input}</div>)
}

export default App;
