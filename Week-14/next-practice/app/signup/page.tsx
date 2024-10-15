"use client"

import {signup} from "@/actions/user/user";
import { useState } from "react"


export default function Signup()
{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleSignup = async() =>{
       const response =  await signup(email,password);
       console.log(response)
    }

    return <div>

        <div>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={handleSignup}>Submit</button>
        </div>

    </div>
}