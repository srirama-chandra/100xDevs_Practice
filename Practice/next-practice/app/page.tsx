import axios from "axios";

export async function getData()
{
  await new Promise((r)=>setTimeout(r,3000));
  const res = await axios.get("http://localhost:3000/api/user");
  return res.data;
}

export default async function Home() {

  const userData = await getData();

  return (
    <div>
      {userData.name}
     <div>
       {userData.email}
     </div>
    </div>
  );
}
