"use client"

import {signIn,signOut, useSession} from 'next-auth/react'

export function Appbar()
{
    const session = useSession();
    return <div className='flex gap-2 '>
        <button onClick={()=>{signIn()}}>Signin</button>
        <button onClick={()=>{signOut()}}>Logout</button>
        <div>{JSON.stringify(session.data)}</div>
    </div>
}