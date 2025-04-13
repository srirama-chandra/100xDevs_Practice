
import { Appbar } from "@/components/Appbar";
import { NEXTAUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function()
{
    const session = await getServerSession(NEXTAUTH_CONFIG);
    return <div>
        <Appbar/>
        <div>{JSON.stringify(session)}</div>
        <div>Home Page</div>
    </div>
}