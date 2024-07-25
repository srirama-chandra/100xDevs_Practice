import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Landing /> }></Route>
          <Route path="/dashboard" element={ <Dashboard /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
