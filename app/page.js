import Image from "next/image";
import { sofia } from "./font";
import { cn } from "./utils";
import { useRouter } from "next/navigation";
import { Links } from "./links";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#262627]">
      <header className="flex items-center justify-center border-b-2 p-2 border-white">
        <p
          className={cn(
            sofia.className,
            "mr-auto text-primary ml-6 text-2xl md:text-4xl"
          )}
        >
          RI
        </p>
        <Links />
      </header>
      <div class="p-6  flex items-center justify-center">
        <div className="p-24 -mt-6 border-r-2 uppercase border-white border-l-2">
          <div className="relative mb-8">
            <h1 className="text-4xl absolute inset-y-0 -top-1.5  z-20  text-primary md:text-6xl">
              {" "}
              Tomisin Rhema Odukoya
            </h1>
            <Image
              src="/tomisin-bar.png"
              width={100}
              height={100}
              className="w-full -ml-8"
              alt="bar"
            />
          </div>
          <h2 className="text-3xl text-white md:text-5xl flex items-center gap-2">
            <p>Product Design</p>
            <p className="text-primary">x</p>
            <p>Backend engineer</p>
          </h2>
        </div>
      </div>
      <div className=" border-b-2 border-white -mt-6 w-full"></div>
      <div class="p-8 text-white flex justify-around">
        <div class="flex gap-1.5 items-start uppercase">
          <Image src="/globe.svg" width={20} height={20} alt="globe svg" />
          <p class="text-base text-primary md:text-lg">/</p>
          <p className="text-base w-1/2 md:text-lg">
            based in Lagos and open to remote work
          </p>
        </div>
        <div class="flex gap-1.5 items-start uppercase">
          2<p class="text-base text-primary md:text-lg">/</p>
          <p className="text-base w-1/2 md:text-lg">years of experience</p>
        </div>
        <div class="flex gap-1.5 items-start uppercase">
          4<p class="text-base text-primary md:text-lg">/</p>
          <p className="text-base w-1/2 md:text-lg">number of projects</p>
        </div>
      </div>
    </main>
  );
}
