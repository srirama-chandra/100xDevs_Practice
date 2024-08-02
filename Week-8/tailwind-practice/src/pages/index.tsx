import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
          <div className="text-center sm:text-left md:text-right">
            <div className="bg-red-500">First</div>
            <div className="bg-blue-500">Second</div>
            <div className="bg-green-500">Third</div>
          </div>
  );
}
