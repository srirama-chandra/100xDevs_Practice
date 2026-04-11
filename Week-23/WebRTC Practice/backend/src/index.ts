import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080, host: "0.0.0.0" });

let senderSocket : WebSocket | null = null;
let receiverSocket : WebSocket | null = null;

wss.on('connection', (ws) => {

    ws.on('message', (data : any) => {
        const message = JSON.parse(data);

        if(message.type === "sender") {
            senderSocket = ws;
        } else if ( message.type === "receiver") {
            receiverSocket = ws;
        } else if ( message.type === "offer") {
            receiverSocket?.send(JSON.stringify({type:"offer",offer:message.offer}));
        } else if (message.type === "answer") {
            senderSocket?.send(JSON.stringify({type:"answer", answer:message.answer}));
        } else if(message.type === "iceCandidates") {
            if(ws === senderSocket ) receiverSocket?.send(JSON.stringify({type:"iceCandidates", iceCandidates: message.iceCandidates}));
            if(ws === receiverSocket ) senderSocket?.send(JSON.stringify({type:"iceCandidates", iceCandidates: message.iceCandidates}));
        }
    })

})