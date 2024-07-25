import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div>
      <Suspense fallback={"Loading"}>
        <BrowserRouter>
          <ButtonComponent />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

function ButtonComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}> Landing Page </button>
      <button onClick={() => navigate("/dashboard")}> Dashboard Page</button>
    </div>
  );
}

export default App;
