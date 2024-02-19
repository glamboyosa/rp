"use client";
import React, { useState } from "react";
import { cn } from "./utils";

const ResumeSwitcher = () => {
  return (
    <div className="flex flex-col mt-3 items-center justify-center px-32 py-16">
      <iframe
        src="/Oluwatomisin_Odukoya_Resume.pdf"
        className="w-full mt-2 h-[300px] md:h-[1000px] overflow-scroll"
        loading="lazy"
        title="PDF-file"
      ></iframe>
    </div>
  );
};

export default ResumeSwitcher;
