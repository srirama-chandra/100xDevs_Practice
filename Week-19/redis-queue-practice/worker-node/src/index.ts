import { createClient } from "redis";

const client = createClient();

async function doCompute(response:{key:string,element:string})
{
    const { element } = response;
    const data = JSON.parse(element);
    await new Promise( response => setTimeout(response,1000))
    console.log(data)
}

async function startWorker()
{
    try{
        await client.connect();
        console.log("Connected To Redis");
        while(true)
        {
            const response = await client.brPop('submissions',0)
            await doCompute(response);
        }
    }
    catch(e)
    {
        console.log(e);
    }
}

startWorker();