import { Button } from "./Button";
import { Heading } from "./Heading";
import { InputBox } from "./InputBox";
import { SubHeading } from "./SubHeading";
import { BottomComponent } from "./BottomComponent";

export function Signup()
{
    return (
        <div className="flex justify-center items-center bg-slate-300 h-screen">

                <div className="bg-white h-max px-4 p-2 w-80 text-center rounded-lg">

                    <Heading label={"Sign Up"}></Heading>
                    <SubHeading label={"Enter your information to create an account"}></SubHeading>
                    <InputBox label={"First Name"} placeholder={"John"}></InputBox>
                    <InputBox label={"Last Name"} placeholder={"Doe"}></InputBox>
                    <InputBox label={"Email"} placeholder={"demo@gmail.com"}></InputBox>
                    <InputBox label={"Password"} placeholder={"Enter Password"}></InputBox>
                    <div className="pt-4">
                        <Button label={"Sign Up"}></Button>
                    </div>
                    <BottomComponent label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"}></BottomComponent>

                </div>

        </div>
    )
}