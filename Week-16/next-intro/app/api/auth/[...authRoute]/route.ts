import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{authRoute:string[]}})
{
    const { authRoute } = await params;
    console.log(authRoute)
    return NextResponse.json({msg:"Hello  There"})
}