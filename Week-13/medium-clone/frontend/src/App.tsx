import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"
import { Post } from "./pages/Post"

export default function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<Signin></Signin>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/blogs/:id" element={<Blogs></Blogs>}></Route>
            <Route path="/post" element={<Post></Post>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}