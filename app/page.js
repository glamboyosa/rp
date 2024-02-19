import Image from "next/image";
import { sofia, libreBarcode } from "./font";
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
      <header className="flex items-center justify-center  p-2">
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
      <div
        id="home"
        className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%] border-y h-[400px]"
      >
        <div className="border-r"></div>
        <div className=" uppercase h-full flex flex-col justify-center gap-12">
          <div className=" flex justify-center items-center">
            <h1 className="text-4xl  text-primary md:text-[70px] relative p-6">
              Tomisin Rhema Odukoya
              <span className="text-4xl absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  -z-10  w-fit text-[#6B686840] md:text-[80px] libre-barcode">
                Tomisin_Rhema_Odukoya
              </span>
            </h1>
          </div>
          <h2 className="text-3xl mt-16 md:mt-1 text-white md:text-7xl flex items-center justify-center gap-2">
            <p>Product Design</p>
            <p className="text-primary">x</p>
            <p>Backend engineer</p>
          </h2>
        </div>
        <div className="border-l"></div>
      </div>
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

      <div className="w-full text-lg md:text-5xl  text-offBlack py-16 px-[5%] md:px-[10%] text-center flex items-center justify-center flex-col border relative z-20 ">
        <Image
          src="/Artwork.svg"
          width={800}
          height={800}
          alt="bike"
          loading="eager"
          className=" absolute -right-[470px] -top-[80px] "
        />
        <Image
          src="/Left_wing_Artwork.svg"
          width={800}
          height={800}
          alt="bike"
          loading="eager"
          className=" absolute -left-[470px] -top-[80px] "
        />
        <div className="leading-relaxed">
          Picture a fusion of{" "}
          <span className="text-primary">product design</span> and{" "}
          <span className="text-primary">backend engineering </span> – yep,
          that&apos;s <span className="text-primary">me! <br /> </span>I thrive in this{" "}
          <q className="text-primary">weird world</q> where creativity meets{" "}
          <span className="text-primary">code. <br /></span> Welcome to my{" "}
          <span className="text-primary">portfolio</span>, where I blend the
          unexpected to create something <br /> uniquely awesome.
        </div>
      </div>

      <div id="works" className="    gap-6 items-center justify-center">
        <div className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%] border-b">
          <div className="border-r"></div>
          <h3 className="text-6xl p-16  md:text-8xl text-center text-white">
            Works
          </h3>
          <div className="border-l"></div>
        </div>

        <div className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%]">
          <div className="border-r"></div>
          <div className="p-8 flex flex-col  gap-8">
            <a className="hover:border-[#95FF00] hover:border-2 duration-200  ">
              <Image
                src="/greedy_pig.svg"
                width={500}
                height={500}
                alt="bike"
                loading="eager"
                className=" w-full"
              />
            </a>

            <a className="hover:border-[#95FF00] hover:border-2 duration-200">
              <Image
                src="/package_dash.svg"
                width={500}
                height={500}
                loading="eager"
                alt="bike"
                className=" w-full"
              />
            </a>

            <a className="hover:border-[#95FF00] hover:border-2 duration-200">
              <Image
                src="/Intervyou.svg"
                width={500}
                height={500}
                loading="eager"
                alt="bike"
                className=" w-full"
              />
            </a>

            <a className="hover:border-[#95FF00] hover:border-2 duration-200">
              <Image
                src="/Django_Quiz_Api.svg"
                width={500}
                height={500}
                loading="eager"
                alt="bike"
                className=" w-full"
              />
            </a>
          </div>
          <div className="border-l"></div>
        </div>
      </div>

      <div className="grid text-5xl">
        <div className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%] border-y">
          <div className="border-r"></div>
          <h3
            id="about"
            className="text-6xl p-16  md:text-8xl text-center text-white"
          >
            Little about me...
          </h3>
          <div className="border-l"></div>
        </div>
        <div className="grid grid-cols-2 py-8  px-[5%] md:px-[10%]  text-offBlack gap-4">
          <div className="h-full flex items-center  text-5xl">
            <p className=" leading-normal">
              Hey, I&apos;m <span className="text-primary">Rhema</span> – a
              hybrid of product design and backend mastery. When I&apos;m not
              coding, I&apos;m hitting the gym or cooking up a storm while
              cheering for basketball and soccer.
              <br />
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
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="grid">
        <section>
          <div className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%] border-y">
            <div className="border-r"></div>
            <h3
              id="resume"
              className="text-6xl p-16  md:text-8xl text-center text-white"
            >
              My Resume
            </h3>
            <div className="border-l"></div>
          </div>
          <div className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%] border-y">
            <div className="border-r"></div>
            <ResumeSwitcher />

            <div className="border-l"></div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%] border-y">
            <div className="border-r"></div>
            <h3
              id="contact"
              className="text-6xl p-16  md:text-8xl text-center text-white border-b"
            >
              Contact Me...
            </h3>
            <div className="border-l"></div>
          </div>
          <div className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%] border-y">
            <div className="border-r"></div>

            <Form />

            <div className="border-l"></div>
          </div>
        </section>
      </div>
      <div className="border-l"></div>

      <section className="grid grid-cols-[5%,1fr,5%] md:grid-cols-[15%,1fr,15%] border-y">
        <div className="border-r"></div>
        <div className="grid">
          <div
            id="contact"
            className="text-6xl p-4 md:p-16  md:text-8xl text-center text-white flex justify-around"
          >
            <a
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] border-2 border-[#95FF00] rounded-full grid place-content-center"
              href="https://www.linkedin.com/in/tomisin-odukoya-13440923b/" target="_blank"
            >
              <FaLinkedinIn size={64} className="hidden md:flex" />
              <FaLinkedinIn size={32} className="md:hidden" />
            </a>
            <a
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] border-2 border-[#95FF00] rounded-full grid place-content-center"
              href="mailto:majortomiodukoya@gmail.com" target="_blank"
            >
              <IoMdMail size={64} className="hidden md:flex" />
              <IoMdMail size={32} className="md:hidden" />
            </a>
            <a
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] border-2 border-[#95FF00] rounded-full grid place-content-center"
              href="https://github.com/MajorTomidev" target="_blank"
            >
              <FaGithub size={64} className="hidden md:flex" />
              <FaGithub size={32} className="md:hidden" />
            </a>
          </div>
        </div>
        <div className="border-l"></div>
      </section>

      <footer className="border-y grid place-content-center h-[200px] text-[#95FF00]">
        <div className="flex gap-2 items-center justify-center w-[300px]">
          <Image
            src="/copyright-sharp.svg"
            width={5}
            height={5}
            loading="eager"
            alt="My profile picture"
            className="w-[50px]"
          />
          <p className="text-xl md:text-3xl">Rhema Innovations 2024</p>
        </div>
      </footer>
    </main>
  );
}
