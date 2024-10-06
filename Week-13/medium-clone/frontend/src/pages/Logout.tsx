import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VerySmallSpinner } from "../components/Spinners";


export const Logout = () => {
    
    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.removeItem("token");

        setTimeout(()=>{navigate('/signin')},3000);

    },[])

    return <div className='h-screen flex justify-center items-center '>
        <div className="border border-gray-400 p-12 text-md font-semibold">
            <div className="flex justify-center">Logout Successful</div>
            <div className="flex justify-center gap-2">
                <VerySmallSpinner/>
                <div>Redirecting To Login Page In 3 Sec</div>
            </div>
        </div>
    </div>
}