"use client";
import React, { useState } from "react";
import { cn } from "./utils";

const ResumeSwitcher = () => {
  const [selection, setSelection] = useState("pd");
  return (
    <div className="flex flex-col mt-3 items-center justify-center">
      <div class="flex">
        <button
          className={cn(
            "p-4 w-44 whitespace-nowrap text-xl",
            selection === "pd"
              ? "bg-primary border"
              : "bg-inherit text-white border border-white"
          )}
          onClick={() => setSelection("pd")}
        >
          Product Design
        </button>
        <button
          className={cn(
            "p-6 w-44 text-xl ",
            selection === "be"
              ? "bg-primary border text-xl"
              : "bg-inherit border text-white border-white"
          )}
          onClick={() => setSelection("be")}
        >
          Backend
        </button>
      </div>
      {selection === "pd" ? (
        <iframe
          src="/prd.pdf"
          className="w-3/4 md:w-1/2 mt-2 h-[300px] md:h-[800px] overflow-scroll"
          loading="lazy"
          title="PDF-file"
        ></iframe>
      ) : (
        <iframe
          src="/bnkd.pdf"
          className="w-3/4 md:w-1/2 mt-2h-[300px] md:h-[800px] overflow-scroll"
          loading="lazy"
          title="PDF-file"
        ></iframe>
      )}
    </div>
  );
};

export default ResumeSwitcher;
