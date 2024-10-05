import { atomFamily, selectorFamily } from "recoil";
import { BlogCardProps } from "../../components/BlogCard";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const BlogAtomFamily = atomFamily<BlogCardProps,number>({
    key:"BlogAtomFamily",
    default: selectorFamily<BlogCardProps,number>({
            key:"BlogSelectorFamily",
            get: (id:number) => async () =>{
                const response = await axios.get(`${BACKEND_URL}/blog/${id}`,{headers:{Authorization:localStorage.getItem("token")}});
                return response.data.post;
            }
    })
});