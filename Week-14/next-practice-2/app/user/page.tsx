import axios from "axios"

async function getDetails()
{
    // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
    const response = await axios.get("http://localhost:3000/api/user")
    return response.data;
}


export default async function User()
{
    const userDetails = await getDetails();
    return <div>
        <div>{userDetails.name}</div>
        <div>{userDetails.email}</div>
    </div>
}