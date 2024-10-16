
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/db";

export function GET()
{
    return Response.json({name:"ram",email:"ram@gmail.com"})
}

export async function POST(req:NextRequest)
{   
    try{
        const body = await req.json();

        await prisma.user.create({data:{email:body.email,password:body.password}});

        return NextResponse.json({msg:"user Created "});
    }
    catch(e)
    {
        return NextResponse.json({msg:"Something Went Wrong"},{status:500});
    }
   
}