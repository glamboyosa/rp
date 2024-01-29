import Image from "next/image";
import { sofia } from "./font";
import { cn } from "./utils";
import { Links } from "./links";
import Peg from "./peg";
import ResumeSwitcher from "./resume-switcher";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import Form from "./form";

export default function Home() {
  return (
    <main className=" min-h-screen overflow-y-clip overflow-x-clip relative ">
      {/* <main className=" min-h-screen h-auto md:h-[388.5vh] overflow-y-clip overflow-x-clip relative "> */}
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
      <div id="home" className="p-6  flex items-center justify-center">
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
              loading="eager"
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
      <div className="p-8  text-white flex justify-around">
        <div className="flex gap-1.5 items-start uppercase">
          <Image
            src="/globe.svg"
            width={20}
            height={20}
            alt="globe svg"
            loading="eager"
          />
          <p className="text-base text-primary md:text-lg">/</p>
          <p className="text-base w-1/2 md:text-lg">
            based in Lagos and open to remote work
          </p>
        </div>
        <div className="flex gap-1.5 items-start uppercase">
          2<p className="text-base text-primary md:text-lg">/</p>
          <p className="text-base w-1/2 md:text-lg">years of experience</p>
        </div>
        <div className="flex gap-1.5 items-start uppercase">
          4<p className="text-base text-primary md:text-lg">/</p>
          <p className="text-base w-1/2 md:text-lg">number of projects</p>
        </div>
      </div>

      <div className="h-60 w-60 bg-inherit border-shapes absolute inset-x-0 -left-36 top-[38%] border rounded-full rotate-90"></div>
      <div className="h-60 w-60 bg-inherit border-shapes absolute inset-x-0 -left-52 top-[39%] border rotate-45"></div>

      <div className="h-60 w-60 bg-inherit border-shapes absolute inset-y-0 -right-36 top-[38%] border rounded-full rotate-90"></div>
      <div className="h-60 w-60 bg-inherit border-shapes absolute inset-y-0 -right-52 top-[39%] border rotate-45"></div>
      <div className="w-full text-lg md:text-2xl gap-0.5 border text-offBlack p-6 flex items-center justify-center flex-col border-white relative z-20">
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

      <div
        id="works"
        className=" relative  p-2  border-white   gap-6 items-center justify-center"
      >
        <h3 className="text-4xl pt-3 p-4 mb-3  md:text-5xl text-center text-white">
          Works
        </h3>
        <Peg from="works" to="about" className=" left-40" />
        <Peg from="works" to="about" className=" right-40 " />
        <div className="h-[1px] -ml-1.5   w-[102%] bg-white"></div>
        <div className="flex flex-col mt-5 items-center justify-center">
          <div className="relative">
            <Image
              src="/bike.svg"
              width={500}
              height={500}
              alt="bike"
              loading="eager"
              className="mb-2 h-full items-center"
            />
          </div>
        </div>
        <div className="flex mt-5 items-center justify-center">
          <Image
            src="/pack.svg"
            width={500}
            height={500}
            loading="eager"
            alt="bike"
            className="mb-2 h-full items-center"
          />
        </div>
      </div>

      <div className="border-b">
        <h3
          id="about"
          className="flex border-t-[1px] border-b-[1px]  text-center p-6 text-white  w-full border-white items-center justify-center text-3xl md:text-4xl"
        >
          Little about me...
        </h3>
        <div className="flex w-full flex-col items-center md:flex-row md:w-[90%] justify-center  text-offBlack gap-1">
          <div className="h-full md:w-[45%] p-8 text-3xl">
            <p className="p-2">
              Hey, I&apos;m <span className="text-primary">Rhema</span> – a
              hybrid of product design and backend mastery. When I&apos;m not
              coding, I&apos;m hitting the gym or cooking up a storm while
              cheering for basketball and soccer.
            </p>
            <p className="block p-2 mt-2">
              My knack for innovation merges with a team-centric approach and
              killer communication. I obsess over details, thrive on feedback,
              and love turning ideas into successful products. Let&apos;s blend
              creativity with functionality and make an impact together!
            </p>
          </div>
          <Image
            src="/me.svg"
            width={100}
            height={100}
            loading="eager"
            alt="My profile picture"
            className="w-[60%] md:w-[20%]"
          />
        </div>
      </div>
      <div className="grid">
       
        <section>
            <h3
              id="resume"
              className="text-6xl p-16  md:text-8xl text-center text-white border-b"
            >
              My Resume
            </h3>
          <div className="grid grid-cols-[15%,1fr,15%] border-y">
            <div className="border-r"></div>
          <ResumeSwitcher />

            <div className="border-l"></div>
          </div>
        </section>

        <section>
            <h3
              id="contact"
              className="text-6xl p-16  md:text-8xl text-center text-white border-b"
            >
              Contact Me...
            </h3>
          <div className="grid grid-cols-[15%,1fr,15%] border-y">
            <div className="border-r"></div>

            <Form />

            <div className="border-l"></div>
          </div>
        </section>
      </div>
      <div className="border-l"></div>

      <section className="grid grid-cols-[15%,1fr,15%] border-y">
        <div className="border-r"></div>
        <div className="grid">
          <div
            id="contact"
            className="text-6xl p-16  md:text-8xl text-center text-white flex justify-between"
          >
            <a
              className="w-[100px] h-[100px] border-2 border-[#95FF00] rounded-full grid place-content-center"
              href="linkedin.com/in/tomisin-odukoya-13440923b"
            >
              <FaLinkedinIn size={64} />
            </a>
            <a
              className="w-[100px] h-[100px] border-2 border-[#95FF00] rounded-full grid place-content-center"
              href="mailto:majortomiodukoya@gmail.com"
            >
              <IoMdMail size={64} />
            </a>
            <a
              className="w-[100px] h-[100px] border-2 border-[#95FF00] rounded-full grid place-content-center"
              href="https://github.com/MajorTomidev"
            >
              <FaGithub size={64} />
            </a>
          </div>
        </div>
        <div className="border-l"></div>
      </section>

      <footer className="border-y grid place-content-center h-[200px] text-[#95FF00]">
        <div className="flex gap-2 items-center text-2xl">
          <Image
            src="/copyright-sharp.svg"
            width={100}
            height={100}
            loading="eager"
            alt="My profile picture"
            className="w-[60%] md:w-[20%]"
          />
          <p>Rhema Innovations 2024</p>
        </div>
      </footer>
    </main>
  );
}
