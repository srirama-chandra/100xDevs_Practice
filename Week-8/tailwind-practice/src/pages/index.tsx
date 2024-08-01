import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="grid grid-cols-12 gap-4 text-center">
            <div className="bg-cyan-500 col-span-4 rounded h-10">1</div>
            <div className="bg-red-500 col-span-4 rounded">2</div>
            <div className="bg-yellow-500 col-span-4 rounded">3</div>
            <div className="bg-cyan-500 col-span-8 rounded h-10">1</div>
            <div className="bg-red-500 col-span-4 rounded">2</div>
            <div className="bg-cyan-500 col-start-5 col-end-13 rounded h-10">1</div>
      </div>
  );
}
