"use client"
import React, { useState } from "react";

interface p{
    title: string;
    link: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export default function Element(props: p) {
    const [isHover, setIsHover] = useState(false);
    return(
     <a href={props.link}
     className="flex items-center space-x-2 p-2 cursor-pointer bg-med-color rounded-full text-white  hover:text-white"
      onMouseEnter={() => setIsHover(true)} // Set hover state to true
      onMouseLeave={() => setIsHover(false)} // Set hover state to false>
        >
        {<props.Icon />}


      {isHover && <span className={` text-white text-lg font-medium transition-opacity duration-300 ease-in-out ${
          isHover ? "opacity-100" : "opacity-0"
        }`}>{props.title}</span>}
     </a>
    )
}