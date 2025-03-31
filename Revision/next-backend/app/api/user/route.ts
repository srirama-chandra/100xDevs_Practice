import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET()
{
    const res = await prisma.user.findFirst();

    return Response.json({res});
}

export async function POST(req:NextRequest)
{
    const body = await req.json();
    return NextResponse.json({body,})
}