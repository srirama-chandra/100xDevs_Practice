import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomComponent } from "../components/BottomComponent";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Signup()
{

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center bg-slate-300 h-screen">

                <div className="bg-white h-max px-4 p-2 w-80 text-center rounded-lg">

                    <Heading label={"Sign Up"}></Heading>
                    <SubHeading label={"Enter your information to create an account"}></SubHeading>
                    <InputBox label={"First Name"} onchange={(e) => setFirstName(e.target.value)} placeholder={"Enter First Name"}></InputBox>
                    <InputBox label={"Last Name"} onchange={(e) => setLastName(e.target.value)} placeholder={"Enter Last Name"}></InputBox>
                    <InputBox label={"Email"} onchange={(e) => setUsername(e.target.value)} placeholder={"Enter Email Here"}></InputBox>
                    <InputBox label={"Password"} onchange={(e) => setPassword(e.target.value)}  placeholder={"Enter Password"}></InputBox>
                    <div className="pt-4">
                        <Button onClick={async()=>{
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                                username,
                                password,
                                firstname,
                                lastname,
                            });
                            localStorage.setItem("token","Bearer "+response.data.token);
                            navigate("/dashboard");
                        }} label={"Sign Up"}></Button>
                    </div>
                    <BottomComponent label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"}></BottomComponent>

                </div>

        </div>
    )
}