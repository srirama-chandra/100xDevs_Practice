import { PrismaClient } from "@repo/database/client";

export default async function User()
{
    const prisma = new PrismaClient();
    const user = await prisma.user.findFirst();

    return <div>
        {user?.name}
        {user?.email}
    </div>
}