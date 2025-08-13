import { NEXT_AUTH_CONFIG } from "@/lib/route";
import { getServerSession } from "next-auth";

export default async function Server()
{
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    return <div>
        <div>Hi There</div>
        <div>{JSON.stringify(session)}</div>
    </div>
}