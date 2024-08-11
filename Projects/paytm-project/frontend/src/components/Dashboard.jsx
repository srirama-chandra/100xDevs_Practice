import { AppBar } from "./AppBar";
import { Balance } from "./Balance";
import { Users } from "./Users";

export function Dashboard()
{
    return <div className="h-screen bg-slate-0">
        
        <AppBar/>
        <div className="m-8">
            <Balance value={1000}/>
            <Users/>
        </div>
        

    </div>
}