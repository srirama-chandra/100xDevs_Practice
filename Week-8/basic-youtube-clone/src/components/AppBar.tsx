import { SearchBar } from "./SearchBar";

export function AppBar()
{
    return <div className="flex justify-between bg-black pt-3">
        <div className="text-white pl-5 pt-2">Youtube</div>
        <div><SearchBar/></div>
        <div className="text-white pr-5 pt-2">Sign In</div>
    </div>
}