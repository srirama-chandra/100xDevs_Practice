import express from 'express'
import { createClient } from 'redis'

const app = express();
app.use(express.json());
const client = createClient();

app.post('/submit',async (req,res)=>{
    try{
        const {userId, problemId, code, lang } = req.body;
        await client.lPush('submissions',JSON.stringify({userId,problemId,code,lang}));
        return res.json({msg:"Submission Succesful"});
    }
    catch(e)
    {
        console.log(e);
    }
    

});

async function startServer(){
    try{
        await client.connect();
        console.log("Connected To Redis");

        app.listen(3000);
    }
    catch(e){
        console.log(e);
    }
}

startServer();