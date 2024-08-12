import { useState } from "react";
import { BottomComponent } from "../components/BottomComponent";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signin()
{
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    return <div className="flex justify-center items-center text-center bg-slate-300 h-screen">

        <div className="bg-white rounded-lg h-max w-80 px-4 p-2 text-center">
            <Heading label={"Sign In"}></Heading>
            <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
            <InputBox label={"Email"} onchange={(e)=>setUserName(e.target.value)} placeholder={"Enter Email Here"}></InputBox>
            <InputBox label={"Password"} onchange={(e)=>setPassword(e.target.value)} placeholder={"Enter Password Here"}></InputBox>
            <div className="pt-4">
                <Button label={"Sign In"} onClick={async()=>{
                    const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password
                    });
                    localStorage.setItem("token","Bearer "+response.data.token);
                    navigate("/dashboard");
                }}></Button>
            </div>
            <BottomComponent label={"Don't have an account ?"} buttonText={"Sign Up"} to={"/signup"}></BottomComponent>
        </div>

    </div>
}