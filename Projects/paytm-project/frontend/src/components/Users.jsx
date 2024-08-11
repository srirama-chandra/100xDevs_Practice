import { useEffect, useState } from "react"
import axios from 'axios'
import { User } from "./User";

export function Users()
{
    const [users,setUsers]=useState([{_id:1,firstname:"Harkirat",lastname:"Singh"},{_id:2,firstname:"Harkirat",lastname:"Singh"},{_id:3,firstname:"Ramesh",lastname:"Singh"}]);
    const [filter,setFilter]=useState("");

    useEffect(()=>{
        
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`).then((res)=>setUsers(res.data.users));

    },[filter])

    return <div className="mt-6">
        <div className="font-bold text-lg">Users</div>
        <div className="pt-2">
            <input onChange={(e)=>{setFilter(e.target.value)}} type="text" placeholder="Search User" className="w-full px-2 py-1 focus:outline-none focus:ring-1 focus:ring-slate-800 border border-slate-300 rounded"></input>
        </div>
        <div className="pt-5">
            {users.map(user => <User key={user._id} user={user}></User>)}
        </div>
    </div>
}