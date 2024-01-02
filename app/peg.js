"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { cn } from "./utils";
import { useMediaQuery } from "@reactuses/core";

const Peg = ({ className }) => {
  const [height, setHeight] = useState(0);
  const isMobile = useMediaQuery("(max-width: 520px)");

  useLayoutEffect(() => {
    if (isMobile) {
      //
      setHeight(0);
    } else {
      const worksDiv = document.getElementById("works");

      const height = worksDiv.offsetHeight;

      const aboutDiv = document.getElementById("about");

      const totalHeight = height + aboutDiv.clientHeight + 2;

      setHeight(totalHeight);
    }
  }, [isMobile]);
  return (
    <div
      className={cn(
        "absolute  top-0 w-[1.5px] bg-white",
        className && className
      )}
      style={{ height }}
    ></div>
  );
};

export default Peg;
