

export const VideoComponent = (props:any) => {

    return (
        <div className="cursor-pointer">

            <div><img className="rounded-md" src={props.image} alt="" /></div>

            <div className=" grid grid-cols-12 pt-2">

                <div className="col-span-1 pt-1.5"><img src={props.logo} alt="" /></div>

                <div className="col-span-11 pl-4">
                     <div className="text-white">{props.title}</div>
                     <div className="text-white">{props.author}</div>
                     <div className="text-gray-500">{props.views} | {props.timeStamp}</div>
                </div>

            </div>

        </div>
    )
}