import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
              <div className="col-span-2">01</div>
              <div className="col-span-2">02</div>
              <div>03</div>
              <div>04</div>
          <div>05</div>
</div>
  );
}
