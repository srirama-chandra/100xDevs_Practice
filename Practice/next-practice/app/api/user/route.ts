import { NextRequest } from "next/server"


export function GET()
{
    return Response.json(({name:"Harkirat",email:"harkirat@gmail.com"}))
}

export async function POST(req:NextRequest)
{
    const body = await req.json()
    console.log(body)
    return Response.json(({name:"Harkirat",email:"harkirat@gmail.com"}))
}