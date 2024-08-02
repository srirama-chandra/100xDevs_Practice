

export function VideoComponent(props:any)
{
    return (
        <div className="pl:5 pr:5 cursor-pointer">

            <img className="rounded-xl" src={props.image} alt="" />
            <div className="grid grid-cols-12">
                <div className="col-span-1 pt-3">
                    <img className="w-12 h-15" src={props.logo} alt="" />
                </div>
                <div className="col-span-11 pl-4">
                    <div className="pt-2 text-white">{props.title}</div>
                    <div className="text-gray-500">{props.author}</div>
                    <div className="text-gray-500">{props.views} | {props.timeStamp}</div>
                </div>
               
            </div>

        </div>
    )
}