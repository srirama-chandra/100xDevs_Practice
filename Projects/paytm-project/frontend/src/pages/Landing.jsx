import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

export function Landing() {

  const navigate = useNavigate();

  return (
          <div className="h-screen bg-slate-300">
                <div className="flex justify-center items-center bg-slate-300 h-screen">

                    <div className="bg-white h-max p-2 w-80 text-center rounded-lg">

                        <div>
                            <Heading label={"Paytm Application"}></Heading>
                        </div>

                        <div className="flex px-4 pt-5 pb-2 gap-5">
                            <Button onClick={()=> navigate("/signup")} label={"Sign Up"}></Button>
                            <Button onClick={()=> navigate("/signin")} label={"Sign In"}></Button>
                        </div>

                    </div>
            
                </div>
            </div>
  );
}
