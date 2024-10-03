import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"

export default function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Signin></Signin>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}