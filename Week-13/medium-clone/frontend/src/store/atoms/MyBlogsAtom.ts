import { atom , selector } from "recoil";
import { BlogCardProps } from "../../components/BlogCard";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const MyBlogsAtom = atom<BlogCardProps[]>({
    key:"MyBlogsAtom",
    default: selector<BlogCardProps[]>({
        key:"MyBlogsAtomSelector",
        get: async () =>{
            try{
                const response = await axios.get(`${BACKEND_URL}/blog/myblogs`,{headers:{Authorization:localStorage.getItem("token")}});
                return response.data.posts;
            }
            catch(e:any){
                throw new Error(e.response?.data?.msg || e.message);
            }
        }
    })
})