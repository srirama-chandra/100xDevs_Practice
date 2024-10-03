import { signInType } from "@sriramachandra/medium-common";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Quote } from "../components/Quote";

export const Signin = () => {

    const navigate = useNavigate();

    const [signInInput,setSignInInput] = useState<signInType>({username:"",password:""});

    async function signInRequest()
    {
        try{
            const response = await axios.post(`${BACKEND_URL}/user/signin`,signInInput);
            localStorage.setItem("token",response.data.token);
            navigate('/blogs');
        }
        catch(e)
        {
            alert("Error While Signing In");
        }
    }

    return (
        <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
    
            <div className="h-screen flex justify-center items-center bg-slate-300 ">
                <div className="flex flex-col gap-4 justify-center items-center rounded-xl px-8 py-8 bg-white">
                    <Heading label="Sign In"></Heading>
                    <InputBox label="Email" placeholder="Enter your email" type="email" onChange={(e) => {setSignInInput({...signInInput,username:e.target.value})}}></InputBox>
                    <InputBox label="Password" placeholder="Enter your password" type="password" onChange={(e) => {setSignInInput({...signInInput,password:e.target.value})}}></InputBox>
                    <Button onClick={signInRequest} label="Sign In"></Button>
                    <Footer label="Don't have an account? " linkText="Sign up" to="/signup"></Footer>
                </div>
            </div>
            
            <div>
                <Quote></Quote>
            </div>
    
        </div>
        )
}