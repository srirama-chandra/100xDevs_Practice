import { useEffect, useState } from "react";

export default function Sender() {
  
  const [socket,setSocket] = useState<WebSocket>();

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onopen = () => {
        ws.send(JSON.stringify({type:"sender"}));
    }
    
  },[])
  
  async function handleOnclick() {
    const pc = new RTCPeerConnection({
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" }
  ]
});

    const streams = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
    streams.getTracks().forEach(track => {
        pc.addTrack(track,streams)
    })

    pc.onicecandidate = async (event) => {
        if(event.candidate) {
            socket?.send(JSON.stringify({type:"iceCandidates",iceCandidates:event.candidate}));
        }
    }

    if(socket) {
        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            if(message.type === "answer") {
                await pc.setRemoteDescription(message.answer);
            } else if ( message.type === "iceCandidates") {
                await pc.addIceCandidate(message.iceCandidates);
            }
        }
    }

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    socket?.send(JSON.stringify({type:"offer",offer:pc.localDescription}));

  }

  return <button onClick={handleOnclick}>Send Now</button>;
}