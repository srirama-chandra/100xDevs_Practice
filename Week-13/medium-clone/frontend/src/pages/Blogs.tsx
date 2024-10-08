import { useRecoilValueLoadable } from "recoil";
import { AppBar } from "../components/AppBar"
import { BlogCard, BlogCardProps } from "../components/BlogCard"
import { AllBlogsAtom } from "../store/atoms/AllBlogsAtom";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {


    try{

        const response = useRecoilValueLoadable(AllBlogsAtom);

        
        if(response.state==="loading"){
            return <div>
                        <AppBar/>
                        <div className="mt-8 mb-4 grid grid-cols-12">
                            <div className="col-span-2"></div>
    
                            <div className="col-span-7">
                                <div className="border-b pb-2">
                                    Latest
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
        {   if(response.contents.message=="Network Error")
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
        else if(response.state==="hasValue"){
    
            const blogData:BlogCardProps[] = response.contents;

            return (
                <div>
                    
                    <AppBar/>
                    <div className="mt-8 mb-4 grid grid-cols-12">
                        <div className="col-span-2"></div>
    
                        <div className="col-span-7">
                            <div className="border-b pb-2">
                                Latest
                            </div>
                            <div className="mt-4">
                                
                                { blogData.length === 0 ? <div className="flex justify-center mt-8"> No Blogs Found</div> : blogData.map ( res => <BlogCard key={res.id} id={res.id} title={res.title} author={res.author} content={res.content} authodId={res.authodId} publishedDate={res.publishedDate}/>)}

                            </div>
                        </div>
    
                        <div className="col-span-3"></div>
                    </div>
    
                </div>
            )
        }

    }
    catch(e:any)
    {
        return <div>Something Went Wrong !!!</div>
    }

    
}