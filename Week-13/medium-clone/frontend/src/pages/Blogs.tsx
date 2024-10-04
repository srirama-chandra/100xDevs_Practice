import { useEffect, useState } from "react"
import { AppBar } from "../components/AppBar"
import { BlogCard, BlogCardProps } from "../components/BlogCard"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Blogs = () => {

    const [blogData,setBlogData] = useState<BlogCardProps[]>([]);
    
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/blog/bulk`,{
            headers:{
                Authorization : localStorage.getItem("token"),
            }
        }).then( response => setBlogData(response.data.posts))
    },[]);

    return (
        <div>
            <AppBar/>
            <div className="mt-8 grid grid-cols-12">
                <div className="col-span-2"></div>

                <div className="col-span-7">
                    <div className="border-b pb-2">
                        Latest
                    </div>
                    <div className="mt-4">
                        {blogData.map( res => <BlogCard key={res.title} title={res.title} authorName="Hello" content={res.content} publishedDate="Oct 1"/>)}
                    </div>
                </div>

                <div className="col-span-3"></div>
            </div>
        </div>

    )
}