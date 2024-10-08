import { useRecoilValueLoadable } from "recoil";
import { AppBar } from "../components/AppBar"
import { BlogCard, BlogCardProps } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { MyBlogsAtom } from "../store/atoms/MyBlogsAtom";

export const MyBlogs = () => {


    try{

        const response = useRecoilValueLoadable(MyBlogsAtom);

        if(response.state==="loading"){
            return <div>
                        <AppBar/>
                        <div className="mt-8 mb-4 grid grid-cols-12">
                            <div className="col-span-2"></div>

                            <div className="col-span-7">
                                <div className="border-b pb-2">
                                    My Blogs
                                </div>
                                <div className="mt-4">
                                    <BlogSkeleton></BlogSkeleton>
                                    <BlogSkeleton></BlogSkeleton>
                                    <BlogSkeleton></BlogSkeleton>
                                    <BlogSkeleton></BlogSkeleton>
                                    
                                </div>
                            </div>

                            <div className="col-span-3"></div>
                        </div>
                    </div>
        }
        else if(response.state==="hasError")
        {
                if(response.contents.message=="Network Error")
                {
                    return <div>Network Error !! Please Check Your Internet Connection</div>
                }
                else if(response.contents.message==="Authentication Failed"){
                    return <div>Your Are Forbidden To Access This Page</div>
                }
                else{
                    return <div>Something Went Wrong</div>
                }
        }
        else if(response.state==="hasValue")
        {
            const blogData:BlogCardProps[] = response.contents;

            return (
                <div>
                    <AppBar/>
                    <div className="mt-8 mb-4 grid grid-cols-12">
                        <div className="col-span-2"></div>

                        <div className="col-span-7">
                            <div className="border-b pb-2">
                                My Blogs
                            </div>
                            <div className="mt-4">
                                {blogData.map( res => <BlogCard key={res.id} id={res.id} title={res.title} author={res.author} content={res.content} authodId={res.authodId} publishedDate="Oct 1"/>)}
                            </div>
                        </div>

                        <div className="col-span-3"></div>
                    </div>
                </div>

            )
        }
    }
    catch(e)
    {
        console.log(e);
        return <div>Something Went Wrong !!!</div>
    }
}