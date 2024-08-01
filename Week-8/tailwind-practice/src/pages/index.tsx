import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="grid grid-cols-10">
            <div className="bg-cyan-500 col-span-4">1</div>
            <div className="bg-red-500 col-span-4">2</div>
            <div className="bg-yellow-500 col-span-2">3</div>
      </div>
  );
}
