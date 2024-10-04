export interface BlogCardProps{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string,
}

export const BlogCard = ({authorName,title,content,publishedDate}:BlogCardProps) => {

    return ( 
        <div className="mt-8 pb-7 border-b cursor-pointer">


            <div className="text-2xl font-bold">{title}</div>


            <div className="mt-2 text-md font-normal text-gray-600">{content.length<150 ? content : content.slice(0,100)+"..."}</div>


            <div className="mt-5 flex gap-3">

                <div className="flex justify-center items-center bg-slate-200 rounded-full w-9 h-9 py-1 col-span-2 ">
                   {authorName[0]}
                </div>

                <div className="text-sm text-slate-500 flex flex-col justify-center">
                    
                    <div>
                        <div className="text-green-600 font-semibold">{authorName}</div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-normal">
                        <div>{publishedDate}</div>
                        <div className="h-0.5 w-0.5 bg-slate-400 rounded-full"></div>
                        <div>{ Math.ceil( content.length / 100 ) } min read</div>
                    </div>

                </div>

            </div>
        </div>
    )
}