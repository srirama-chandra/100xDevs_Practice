import axios from "axios"

async function getDetails()
{
    const res = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    return res.data;
}

export default async function User(){

    const data = await getDetails();

    return <div>
        <div>{data.name}</div>
        <div>{data.email}</div>
    </div>
}