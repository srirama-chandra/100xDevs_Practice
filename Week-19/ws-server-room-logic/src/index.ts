import express from 'express'
import http from 'http'
import { WebSocketServer } from 'ws'

const app = express();

const server = http.createServer(app);

const ws = new WebSocketServer({server});

const users : { 
    [key:string]:{
        roomId:string,
        ws:any
    }
} = {};

let counter = 0;

ws.on("connection",(ws,req)=>{

    const wsId = counter++;

    ws.on("message",(message)=>{
        const data = JSON.parse(message.toString());
        if(data.type==="join")
        {
            users[wsId] = {
                roomId: data.payload.roomId,
                ws
            }
        }
        if(data.type==="message"){
            const roomId = users[wsId].roomId;
            const data = JSON.parse(message.toString());
            
            Object.keys(users).forEach( (wsId) =>{
                if(users[wsId].roomId===roomId){
                    users[wsId].ws.send(JSON.stringify({
                        type:"message",
                        payload: { message: data.payload.message }
                    }))
                }
            })
        }
        
    })

})

server.listen(3000);