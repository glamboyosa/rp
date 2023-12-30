import Image from "next/image";
import { sofia } from "./font";
import { cn } from "./utils";
import { Links } from "./links";

export default function Home() {
  return (
    <main className=" min-h-screen  overflow-x-clip relative ">
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
      <div id="home" class="p-6  flex items-center justify-center">
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
          <h2 className="text-3xl mt-16 md:mt-1 text-white md:text-5xl flex items-center gap-2">
            <p>Product Design</p>
            <p className="text-primary">x</p>
            <p>Backend engineer</p>
          </h2>
        </div>
      </div>
      <div className=" border-b-2 border-white -mt-6 w-full"></div>
      <div class="p-8  text-white flex justify-around">
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

      <div class="h-60 w-60 bg-inherit border-shapes absolute inset-x-0 -left-36 top-1/2 border rounded-full rotate-90"></div>
      <div class="h-60 w-60 bg-inherit border-shapes absolute inset-x-0 -left-52 top-[52%] border rotate-45"></div>

      <div class="h-60 w-60 bg-inherit border-shapes absolute inset-y-0 -right-36 top-1/2 border rounded-full rotate-90"></div>
      <div class="h-60 w-60 bg-inherit border-shapes absolute inset-y-0 -right-52 top-[52%] border rotate-45"></div>
      <div
        id="about"
        class="w-full text-lg md:text-2xl gap-0.5 border text-offBlack p-6 flex items-center justify-center flex-col border-white relative z-20"
      >
        <div>
          Picture a fusion of{" "}
          <span className="text-primary">product design</span> and{" "}
          <span className="text-primary">backend engineering </span> – yep,
          that&apos;s <span className="text-primary">me!</span>
        </div>
        <div>
          {" "}
          I thrive in this <q className="text-primary">weird world</q> where
          creativity meets <span className="text-primary">code.</span>
        </div>
        <div>
          {" "}
          Welcome to my <span className="text-primary">portfolio</span>, where I
          blend the unexpected to create something uniquely awesome.
        </div>
      </div>

      <div class="absolute top-[65%] md:top-[48%]  left-1/2 -translate-x-1/2 p-2 translate-y-1/2 border-l-2 border-r-2 border-white   gap-6 items-center justify-center">
        <h3
          id="works"
          className="text-4xl pt-3  md:text-5xl text-center text-white"
        >
          Works
        </h3>
        <div className="flex mt-5 items-center justify-center">
          <Image
            src="/bike.svg"
            width={400}
            height={400}
            alt="bike"
            className="mb-2 w-3/4 h-full items-center"
          />
        </div>
        <div className="flex mt-5 items-center justify-center">
          <Image
            src="/pack.svg"
            width={400}
            height={400}
            alt="bike"
            className="mb-2 w-3/4 h-full items-center"
          />
        </div>
      </div>
    </main>
  );
}
