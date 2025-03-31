import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getBlogsData()
{
    const response = await prisma.user.findFirst();
    return response;

}

export default async function()
{
    const blogData = await getBlogsData();

    return <div>
        <div>{blogData?.id}</div>
        <div>{blogData?.email}</div>
        <div>{blogData?.password}</div>
       
    </div>
}