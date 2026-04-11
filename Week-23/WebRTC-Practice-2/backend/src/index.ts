import { WebSocketServer, WebSocket } from "ws";

let senderSocket : WebSocket | null = null;
let receiverSocket : WebSocket | null = null;

const wss = new WebSocketServer({port:8080});

wss.on('connection', (ws) => {
    console.log("Connected To Websocket Server");

    ws.on('message', (data : any) => {
        const message = JSON.parse(data);

        if (message.type === "sender") {
            senderSocket = ws;
            console.log("Sender Socket Set");
        } else if (message.type === "receiver") {
            receiverSocket = ws;
            console.log("Receiver Socket Set");
        } else if (message.type === "offer") {
            receiverSocket?.send(JSON.stringify({type:"offer",offer:message.offer}));
        } else if (message.type === "answer") {
            senderSocket?.send(JSON.stringify({type:"answer", answer: message.answer}));
        } else if (message.type === "iceCandidate") {
            if(ws === senderSocket) receiverSocket?.send(JSON.stringify({type:"iceCandidate",iceCandidate: message.iceCandidate}));
            if(ws === receiverSocket) senderSocket?.send(JSON.stringify({type:"iceCandidate", iceCandidate: message.iceCandidate}));
        }
    })
})