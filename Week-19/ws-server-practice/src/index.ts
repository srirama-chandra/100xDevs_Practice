
import express from 'express'
import http from 'http'
import { WebSocketServer } from 'ws';

const app = express();
const server = http.createServer(app);

const ws = new WebSocketServer({server});

ws.on("connection", async (ws,req)=>{
    console.log("Connection Established With WS Server");

    ws.on("message",(message)=>{
        console.log(`Browser Sent ${message}`);
        ws.send(`You Sent ${message}`);
    })

    ws.on('close',()=>{
        console.log("Disconnected With WS Server")
    })
})



app.get('/health',(req,res)=>{
    return res.json({msg:"Healthy"})
})

server.listen(3000)