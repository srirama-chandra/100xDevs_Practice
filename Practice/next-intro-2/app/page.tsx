"use client"

import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <button onClick={()=>signIn()}>signIn</button>
      <button onClick={()=>signOut()}>signOut</button>
    </div>
  );
}
