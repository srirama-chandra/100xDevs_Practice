import { SearchBar } from "./SearchBar"


export const AppBar = () =>{

    return(
        <div className="flex justify-between text-white pl-5 pr-5 pt-2 pb-5 shadow-sm shadow-white/90">
            <div className="pt-2.5">Youtube</div>
            <div><SearchBar></SearchBar></div>
            <div className="pt-2.5 cursor-pointer">Sign in</div>
        </div>
    )
}