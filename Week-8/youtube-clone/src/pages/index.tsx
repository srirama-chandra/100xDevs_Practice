import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="flex flex-row">
            <div className="bg-cyan-500">First</div>
            <div className="bg-red-500">Second</div>
            <div className="bg-yellow-500">Third</div>
      </div>
  );
}
