import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const countCountext = createContext();

export function CountCountextProvider({children})
{
    const [count2,setCount2] = useState(5);

    return <countCountext.Provider value={{count2,setCount2}}>
        {children}
    </countCountext.Provider>
}