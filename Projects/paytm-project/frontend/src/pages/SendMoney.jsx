import { useNavigate, useSearchParams } from "react-router-dom";
import { Heading } from "../components/Heading"
import { useState } from "react";
import axios from "axios";

export function SendMoney()
{
    const [amount,setAmount]=useState(0);
    const [searchParams]= useSearchParams();
    const id=searchParams.get("id");
    const name=searchParams.get("name");
    const navigate=useNavigate();


    return <div className="h-screen bg-gray-100 flex justify-center items-center">

       <div className="bg-white w-96 p-4 shadow-lg rounded-lg flex flex-col gap-4">

                <div className="text-center">
                    <Heading label={"Send Money"}></Heading>
                </div>

                <div className="flex items-center gap-2 px-4 pt-10">
                        <div className="flex justify-center items-center w-12 h-12 bg-green-500 rounded-full text-2xl text-white">{name[0]}</div>
                        <div className="text-2xl font-semibold">{name}</div>
                </div>

                <div className="space-y-2 px-4">
                    <label className="text-sm font-medium ">Amount (in Rs)</label>
                    <input type="number" placeholder="Enter amount" className="w-full h-10 border border-input rounded-md px-3 py-2 text-sm focus:ring-0 focus:ring-blue-100 " onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className="px-4 pb-3">
                    <button onClick={async()=>{
                        await axios.post("http://localhost:3000/api/v1/account/transfer",{to:id,amount},{headers:{Authorization:localStorage.getItem("token")}});
                        navigate('/dashboard');
                    }} className="bg-green-500 w-full rounded-md text-white text-sm font-medium px-4 py-2 hover:bg-green-600" >Intiate Transfer</button>
                </div>
       </div>
        
    </div>
}