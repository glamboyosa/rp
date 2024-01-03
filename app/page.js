import Image from "next/image";
import { sofia } from "./font";
import { cn } from "./utils";
import { Links } from "./links";
import Peg from "./peg";
import ResumeSwitcher from "./resume-switcher";
import { sendEmail } from "./actions";
const resend = new Resend(process.env.RESEND_API_KEY);

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

      <div class="h-60 w-60 bg-inherit border-shapes absolute inset-x-0 -left-36 top-[38%] border rounded-full rotate-90"></div>
      <div class="h-60 w-60 bg-inherit border-shapes absolute inset-x-0 -left-52 top-[39%] border rotate-45"></div>

      <div class="h-60 w-60 bg-inherit border-shapes absolute inset-y-0 -right-36 top-[38%] border rounded-full rotate-90"></div>
      <div class="h-60 w-60 bg-inherit border-shapes absolute inset-y-0 -right-52 top-[39%] border rotate-45"></div>
      <div class="w-full text-lg md:text-2xl gap-0.5 border text-offBlack p-6 flex items-center justify-center flex-col border-white relative z-20">
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
        class=" relative  p-2  border-white   gap-6 items-center justify-center"
      >
        <h3 className="text-4xl pt-3 p-4 mb-3  md:text-5xl text-center text-white">
          Works
        </h3>
        <Peg from="works" to="about" className=" left-1/4" />
        <Peg from="works" to="about" className=" right-1/4 " />
        <div className="h-[1px] -ml-1.5   w-[102%] bg-white"></div>
        <div className="flex flex-col mt-5 items-center justify-center">
          <div className="relative">
            <Image
              src="/bike.svg"
              width={500}
              height={500}
              alt="bike"
              className="mb-2 h-full items-center"
            />
          </div>
        </div>
        <div className="flex mt-5 items-center justify-center">
          <Image
            src="/pack.svg"
            width={500}
            height={500}
            alt="bike"
            className="mb-2 h-full items-center"
          />
        </div>
      </div>

      <div>
        <h3
          id="about"
          class="flex border-t-[1px] border-b-[1px]  text-center p-6 text-white  w-full border-white items-center justify-center text-3xl md:text-4xl"
        >
          Little about me...
        </h3>
        <div class="flex w-[90%] justify-center  text-offBlack gap-1">
          <div className="h-full w-[45%] p-8 text-3xl">
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
            alt="My profile picture"
            className="w-[20%]"
          />
        </div>
      </div>
      <div
        id="resume"
        class=" relative  p-2  border-white   gap-6 items-center justify-center"
      >
        <div className="h-[1px] -ml-1.5   w-[102%] bg-white"></div>
        <h3 className="text-4xl  border-white pt-3 p-4 mb-3  md:text-5xl text-center text-white">
          My Resume
        </h3>
        <div className="h-[1px] -ml-1.5   w-[102%] bg-white"></div>
        <Peg from="resume" to="contact-id" className=" left-1/4" />
        <Peg from="resume" to="contact-id" className=" right-1/4 " />
        <ResumeSwitcher />
        <div className="h-[1px] mt-3 -ml-1.5   w-[102%] bg-white"></div>
        <h3
          id="contact"
          className="text-4xl  border-white pt-3 p-4 mb-3  md:text-5xl text-center text-white"
        >
          Contact Me...
        </h3>
        <div className="h-[1px] -ml-1.5   w-[102%] bg-white"></div>
        <form
          className="flex flex-col mt-2 items-center justify-around gap-3"
          action={sendEmail}
        >
          <div>
            <div class="flex ml-2  text-2xl">
              <p className="text-primary mr-2.5">01.</p>
              <p className="text-white  mr-6">Name</p>
              <input
                type="text"
                name="name"
                className="bg-transparent outline-none  text-offBlack"
                placeholder="Enter your name..."
              />
            </div>
            <div className="h-[1px]   w-[50vw] bg-white"></div>
          </div>
          <div>
            <div class="flex ml-2  text-2xl">
              <p className="text-primary mr-2.5">02.</p>
              <p className="text-white  mr-6">Email</p>
              <input
                type="email"
                name="email"
                className="bg-transparent outline-none  text-offBlack"
                placeholder="Enter your email..."
              />
            </div>
            <div className="h-[1px]   w-[50vw] bg-white"></div>
          </div>
          <div>
            <div class="flex ml-2  text-2xl">
              <p className="text-primary mr-2.5">03.</p>
              <p className="text-white  mr-6">Phone Number</p>
              <input
                type="tel"
                name="number"
                className="bg-transparent w-3/4 outline-none  text-offBlack"
                placeholder="Enter your phone number..."
              />
            </div>
            <div className="h-[1px]   w-[50vw] bg-white"></div>
          </div>
          <div>
            <div class="flex ml-2  text-2xl">
              <p className="text-primary mr-2.5">04.</p>
              <p className="text-white  mr-6">Your Message to me</p>
              <input
                type="text"
                name="message"
                className="bg-transparent outline-none  text-offBlack"
                placeholder="Write your mind..."
              />
            </div>
            <div className="h-[1px]   w-[50vw] bg-white"></div>
          </div>
          <button
            type="submit"
            className="bg-primary text-lg mt-4 rounded-sm px-10 py-3"
          >
            Send Message
          </button>
        </form>
      </div>
      <div
        id="contact-id"
        className="h-[1px] -ml-1.5   w-[102%] bg-white"
      ></div>
    </main>
  );
}
