import { useEffect, useRef } from "react"

export default function Receiver() {

  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
 
    const pc = new RTCPeerConnection({
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" }
  ]
});

    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
        ws.send(JSON.stringify({type:"receiver"}));
    }

    pc.onicecandidate = (event) => {
        if(event.candidate) {
            ws.send(JSON.stringify({type:"iceCandidates",iceCandidates:event.candidate}))
        }
    }

    pc.ontrack = (event) => {
      if (videoRef.current) {
        videoRef.current.srcObject = event.streams[0];
      }
    };

    ws.onmessage = async (event) => {

       const message = JSON.parse(event.data);

      if (message.type === "offer") {
        await pc.setRemoteDescription(message.offer);

        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        ws.send(JSON.stringify({
          type: "answer",
          answer: pc.localDescription
        }));
      }

      if (message.type === "iceCandidates") {
        await pc.addIceCandidate(message.candidate);
      }
    }  

  },[])
  
  return (
    <div>
        <video ref={videoRef} autoPlay playsInline></video>
    </div>
  )
}
