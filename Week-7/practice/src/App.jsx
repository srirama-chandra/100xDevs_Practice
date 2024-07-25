import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ButtonComponent/>
        <Routes>
          <Route path="/" element={ <Landing /> }></Route>
          <Route path="/dashboard" element={ <Dashboard /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ButtonComponent()
{
    const navigate=useNavigate();
    return <div>
      <button onClick={()=>navigate("/")}> Landing Page </button>
      <button onClick={()=>navigate("/dashboard")}> Dashboard Page</button>
    </div>
}

export default App;
