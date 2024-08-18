import './App.css'

function App() {

  return (
    <>
      <Todos title={"Go To Gym"} description={"Go Now"}></Todos>
      <Todos title={"Go To Gym"} description={"Go Now"}></Todos>
    </>
  )
}

function Todos({title,description}:todoInterface)
{
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}

interface todoInterface{
    title: string,
    description: string
}

export default App
