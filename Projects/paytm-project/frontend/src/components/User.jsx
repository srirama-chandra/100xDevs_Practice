import { Button } from "./Button";

export function User({user})
{
    return <div className="flex justify-between items-center pb-3">

        <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-12 bg-slate-300 flex justify-center items-center rounded-full">{user.firstname[0]}</div>
            <div>{user.firstname} {user.lastname}</div>
        </div>

        <div>
            <Button label={"Send Money"}></Button>
        </div>

    </div>
}