import { useEffect, useState } from "react";

export default function Sender() {
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    setSocket(ws);

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "sender" }));
    };
  }, []);

  async function handleClick() {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    pc.onconnectionstatechange = () => {
      console.log("Connection state:", pc.connectionState);
    };
    const streams = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    streams.getTracks().forEach((track) => pc.addTrack(track, streams));

    pc.onicecandidate = (event) => {
      if (event.candidate)
        socket?.send(
          JSON.stringify({
            type: "iceCandidate",
            iceCandidate: event.candidate,
          }),
        );
    };

    if (socket) {
      socket.onmessage = async (event) => {
        const message = JSON.parse(event.data);
        if (message.type === "answer") {
          await pc.setRemoteDescription(message.answer);
        } else if (message.type === "iceCandidate") {
          await pc.addIceCandidate(message.iceCandidate);
        }
      };
    }

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    socket?.send(JSON.stringify({ type: "offer", offer: pc.localDescription }));
  }

  return <button onClick={handleClick}>Sender</button>;
}
