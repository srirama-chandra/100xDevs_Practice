"use server"

import { PrismaClient } from "@prisma/client";

export async function signup(email:string,password:string)
{
const client = new PrismaClient();
   try{
    await client.user.create({data:{email:email,password:password}})
    return {msg:"Success"}
   }
   catch(e)
   {
    console.log(e);
    return {msg:"Success"}
   }

    
}