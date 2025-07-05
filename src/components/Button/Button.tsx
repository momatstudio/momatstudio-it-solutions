"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

interface ButtonProps {
  link: string;
  name: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  hoverColor?: string;
  margin?: string;
  scrolled?: boolean;
  className?: string;
}
function Button({
  link,
  name,
  textColor,
  bgColor,
  hoverColor,
  borderColor,
  margin,
  scrolled,
  className,
}: ButtonProps) {
  const [hoverActive, setHoverActive] = useState(false);
  return (
    <ScrollLink
      to={link}
      smooth={true}
      duration={500}
      onMouseEnter={() => setHoverActive(true)}
      onMouseLeave={() => setHoverActive(false)}
      className={` ${className} max-w-fit`}
    >
      <button
        className={`h-12 px-6 3px-6 rounded-full hover:bg-[#5833F1] hover:border-[#5833F1] hover:text-[#ffffff] `}
        style={{
          color: scrolled || hoverActive ? "white" : textColor,
          backgroundColor: hoverActive ? hoverColor : bgColor,
          borderColor: hoverActive ? hoverColor : borderColor,
          borderWidth: 2,
          marginLeft: margin || 0,
          transition: "all 0.3s ease-in-out",
        }}
      >
        {name}
      </button>
    </ScrollLink>
  );
}

export default Button;
