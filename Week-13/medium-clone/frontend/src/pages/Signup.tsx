import { useState } from "react"
import { Button } from "../components/Button"
import { Footer } from "../components/Footer"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Quote } from "../components/Quote"
import { signUpType } from "@sriramachandra/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const Signup = () => {

    const navigate = useNavigate();

    const [signUpInput,setSignUpInput] = useState<signUpType>({name:"",username:"",password:""});

    async function signUpRequest()
    {
        try{
            const response = await axios.post(`${BACKEND_URL}/user/signup`,signUpInput);
            localStorage.setItem("token",response.data.token);
            navigate('/blogs');
        }
        catch(e)
        {
            alert("Error While Signing Up");
        }
    }

    return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">

        <div className="h-screen flex justify-center items-center bg-slate-300 ">
            <div className="flex flex-col gap-4 justify-center items-center rounded-xl px-8 py-8 bg-white">
                <Heading label="Create an account"></Heading>
                <InputBox label="Name" placeholder="Enter your name" type="text" onChange={(e) => {setSignUpInput({...signUpInput,name:e.target.value})}}></InputBox>
                <InputBox label="Email" placeholder="Enter your email" type="email" onChange={(e) => {setSignUpInput({...signUpInput,username:e.target.value})}}></InputBox>
                <InputBox label="Password" placeholder="Enter your password" type="password" onChange={(e) => {setSignUpInput({...signUpInput,password:e.target.value})}}></InputBox>
                <Button onClick={signUpRequest} label="Sign Up"></Button>
                <Footer label="Already have an account? " linkText="Sign in" to="/signin"></Footer>
            </div>
        </div>
        
        <div>
            <Quote></Quote>
        </div>

    </div>
    )
}