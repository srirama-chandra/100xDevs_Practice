import { AppBar } from "@/components/AppBar";
import { VideoGrid } from "@/components/VideoGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-dvh bg-black">
        <AppBar></AppBar>
        <VideoGrid></VideoGrid>
    </div>
  );
}
