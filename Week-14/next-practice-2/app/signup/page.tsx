"use client"

import { useState } from "react"
import { signup } from "../actions/user";

export default function Signup()
{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return <div className="h-screen flex justify-center items-center">
       <div className="flex flex-col justify-center px-12 py-12  border rounded-lg">

            <div className="mb-2 flex justify-center">Signup Page</div>

            <div className="mt-4 flex flex-col justify-center">
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email" className="px-1 mb-4 border"/>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="px-1 mb-4  border"/>
                <button className="border" onClick={async()=>{
                                                        const res = await signup(email, password)
                                                        console.log(res);
                                                        }}>Submit</button>
            </div>

       </div>

    </div>
}