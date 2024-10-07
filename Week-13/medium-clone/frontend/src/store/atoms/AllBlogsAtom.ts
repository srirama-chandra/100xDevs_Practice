import { atom , selector } from "recoil";
import { BlogCardProps } from "../../components/BlogCard";
import axios from "axios";
import { BACKEND_URL } from "../../config";


export const AllBlogsAtom = atom<BlogCardProps[]>({

    key:"AllBlogsAtom",
    default: selector<BlogCardProps[]>({
        key:"AllBlogsSelectorData",
        get: async () =>{
            try{
                const response = await axios.get(`${BACKEND_URL}/blog/bulk`,{headers:{Authorization:localStorage.getItem("token") || ""}});
                return response.data.posts;
            }
            catch(e:any)
            {
               console.log(e);
            }
        
        }
    })
})