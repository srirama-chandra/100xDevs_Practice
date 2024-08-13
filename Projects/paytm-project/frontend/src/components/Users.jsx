import { useEffect, useState } from "react"
import axios from 'axios'
import { User } from "./User";

export function Users()
{
    const [users,setUsers]=useState([]);
    const [filter,setFilter]=useState("");
    const [id,setId]=useState("");

    useEffect(()=>{
            axios.get("http://localhost:3000/api/v1/user/id",{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            }).then((res)=> setId(res.data.id));
    },[]);

    useEffect(()=>{

        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`).then((res)=>{

            const users = res.data.users;
            const filteredUsers = users.filter(user => user._id != id);
            setUsers(filteredUsers);
        });

    },[id, filter]);

    

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