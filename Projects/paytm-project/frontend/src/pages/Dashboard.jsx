import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

export function Dashboard()
{
    const [balance,setBalance]=useState(0);
    
    useEffect(()=>{

            axios.get("http://localhost:3000/api/v1/account/balance",{
                headers:{
                    'authorization': localStorage.getItem('token'),
                }
            }).then((res)=>setBalance(Math.trunc(res.data.balance)));

    },[])

    

    return <div className="h-screen bg-slate-0">
        
        <AppBar/>
        <div className="m-8">
            <Balance value={balance}/>
            <Users/>
        </div>
        

    </div>
}