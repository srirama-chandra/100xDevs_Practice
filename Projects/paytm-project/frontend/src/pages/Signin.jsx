import { BottomComponent } from "../components/BottomComponent";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";


export function Signin()
{
    return <div className="flex justify-center items-center text-center bg-slate-300 h-screen">

        <div className="bg-white rounded-lg h-max w-80 px-4 p-2 text-center">
            <Heading label={"Sign In"}></Heading>
            <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
            <InputBox label={"Email"} placeholder={"Enter Email Here"}></InputBox>
            <InputBox label={"Password"} placeholder={"Enter Password Here"}></InputBox>
            <div className="pt-4">
                <Button label={"Sign In"}></Button>
            </div>
            <BottomComponent label={"Don't have an account ?"} buttonText={"Sign Up"} to={"/signup"}></BottomComponent>
        </div>

    </div>
}