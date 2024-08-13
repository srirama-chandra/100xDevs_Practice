import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function User({user})
{
    const navigate = useNavigate();
    
    return <div className="flex justify-between items-center pb-3">

        <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-12 bg-slate-300 flex justify-center items-center rounded-full">{user.firstname[0]}</div>
            <div>{user.firstname} {user.lastname}</div>
        </div>

        <div>
            <Button label={"Send Money"} onClick={()=>{
                navigate("/send?id="+user._id+"&name="+user.firstname+" "+user.lastname)
            }}></Button>
        </div>

    </div>
}