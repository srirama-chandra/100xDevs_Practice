import { useRecoilValueLoadable } from "recoil";
import { AppBar } from "../components/AppBar"
import { BlogCard, BlogCardProps } from "../components/BlogCard"
import { AllBlogsAtom } from "../store/atoms/AllBlogsAtom";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {

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
                        {blogData.map( res => <BlogCard key={res.id} id={res.id} title={res.title} author={res.author} content={res.content} authodId={res.authodId} publishedDate="Oct 1"/>)}
                    </div>
                </div>

                <div className="col-span-3"></div>
            </div>
        </div>

    )
}