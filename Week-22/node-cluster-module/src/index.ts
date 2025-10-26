import express from 'express';
import cluster from 'cluster'

const port = 3000;
const cores = 2;

if(cluster.isPrimary){

    for(let i=0;i<cores;i++)
    {
        cluster.fork();
    }

}
else{

    const app = express();
    console.log(`Worker Node With Process Id - ${process.pid} Started`);
    app.get('/',(req,res)=>{
        return res.json({msg:"Hello World"})
    })

    app.listen(port,()=>{console.log('Listening On Port '+port)});

}