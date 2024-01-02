"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
function Circle() {
  return <div class="w-2 h-2 rounded-full bg-primary"></div>;
}
export function Links() {
  const params = useParams();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("home");
  useEffect(() => {
    console.log(params);
    console.log(pathname);
    console.log(window.location.hash);
    setActiveTab(
      window.location.hash.length > 0
        ? window.location.hash.split("#")[1]
        : "home"
    );
  }, [params, pathname]);

  return (
    <nav className="mr-1 md:mr-[590px]">
      <ul className="gap-4 text-white flex [&>*]:text-xl">
        <li>
          {activeTab === "home" ? (
            <div className="flex items-center gap-1">
              <Circle />
              <Link className="text-primary" href="/#home">
                Home
              </Link>
            </div>
          ) : (
            <Link className="" href="/#home">
              Home
            </Link>
          )}
        </li>
        <li>
          {activeTab === "works" ? (
            <div className="flex items-center gap-1">
              <Circle />
              <Link className="text-primary" href="/#works">
                Works
              </Link>
            </div>
          ) : (
            <Link className="" href="/#works">
              Works
            </Link>
          )}
        </li>
        <li>
          {activeTab === "about" ? (
            <div className="flex items-center gap-1">
              <Circle />
              <Link className="text-primary" href="/#about">
                About
              </Link>
            </div>
          ) : (
            <Link className="" href="/#about">
              About
            </Link>
          )}
        </li>
        <li>
          {activeTab === "resume" ? (
            <div className="flex items-center gap-1">
              <Circle />
              <Link className="text-primary" href="/#resume">
                Resume
              </Link>
            </div>
          ) : (
            <Link className="" href="/#resume">
              Resume
            </Link>
          )}
        </li>
        <li>
          {activeTab === "contact" ? (
            <div className="flex items-center gap-1">
              <Circle />
              <Link className="text-primary" href="/#contact">
                Contact
              </Link>
            </div>
          ) : (
            <Link className="" href="/#contact">
              Contact
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
