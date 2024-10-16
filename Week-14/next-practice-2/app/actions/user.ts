"use server"

import prisma from "@/db";


export async function signup(email:string,password:string)
{
    try{
       
        await prisma.user.create({data:{email:email,password:password}});

       return JSON.stringify("Done");
    }
    catch(e)
    {
        return JSON.stringify("Error");
    }
}