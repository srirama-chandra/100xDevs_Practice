import { atomFamily, selectorFamily } from "recoil";
import { BlogCardProps } from "../../components/BlogCard";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const BlogWithIdAtomFamily = atomFamily<BlogCardProps,number>({
    key:"BlogWithIdAtomFamily",
    default: selectorFamily<BlogCardProps,number>({
            key:"BlogWithIdSelectorFamily",
            get: (id:number) => async () =>{
                const response = await axios.get(`${BACKEND_URL}/blog/${id}`,{headers:{Authorization:localStorage.getItem("token")}});
                return response.data.post;
            }
    })
});