import { Link, useNavigate } from "react-router-dom"

export const AppBar = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-between px-8 py-4 border-b">
            <div className="flex items-center">
                <Link to={'/blogs'}><div>Medium</div></Link>
            </div>
            <div className="flex items-center">
                <div><button type="button" onClick={() => {navigate('/post')}}className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 mr-3">Post</button></div>
                <div className="bg-slate-200 rounded-full w-10 py-2 text-center cursor-pointer">H</div>
            </div>
        </div>
    )
}