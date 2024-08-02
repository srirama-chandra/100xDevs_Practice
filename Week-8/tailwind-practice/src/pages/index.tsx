import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="grid grid-rows-3 grid-flow-col gap-2">
            <div className="bg-cyan-500 rounded row-span-3">1</div>
            <div className="bg-red-500 rounded">2</div>
            <div className="bg-yellow-500 rounded row-span-2">3</div>
      </div>
  );
}
