import { PrismaClient } from "@prisma/client";
import { STATUS_CODES } from "http";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req:NextRequest)
{
    const body = await req.json();

   try{
    await client.user.create({data:{email:body.email,password:body.password}})
   }
   catch(e)
   {
    console.log(e);
    return NextResponse.json({msg:"Soemthign Went Wrong"},{status:500})
   }

    return NextResponse.json({msg:"User Data Saved Successfully"})
}