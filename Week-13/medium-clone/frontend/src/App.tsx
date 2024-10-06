import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blogs } from "./pages/Blogs"
import { Post } from "./pages/Post"
import { FullBlog } from "./pages/FullBlog"
import { RecoilRoot } from "recoil"
import { ProfileComponent } from "./components/ProfileComponent"


export default function App() {
  return (
    <>
        
          <RecoilRoot>
            
              <BrowserRouter>
                <Routes>
                  <Route path="/signin" element={<Signin></Signin>}></Route>
                  <Route path="/signup" element={<Signup></Signup>}></Route>
                  <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                  <Route path="/blog/:id" element={<FullBlog></FullBlog>}></Route>
                  <Route path="/post" element={<Post></Post>}></Route>
                  <Route path="/animation" element={<ProfileComponent/>}></Route>
                </Routes>
              </BrowserRouter>

          </RecoilRoot>
        
    </>
  )
}