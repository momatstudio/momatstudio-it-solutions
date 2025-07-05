"use client";
import React, { JSX } from "react";
import { Link as ScrollLink } from "react-scroll";

interface navItem {
  id: number;
  title: string | JSX.Element;
  link: string;
}

interface NavProps {
  navList: navItem[];
  color?: string;
  iconsColors?: string;
  size?: string;
  hidden?: string;
}

export default function Nav({ navList, color, size }: NavProps) {
  return (
    <ul
      className={`flex lg:justify-between md:items-center cursor-pointer gap-4 text-${color} `}
    >
      {navList.map((item, index) => (
        <li key={index} className={`text-${size} hover:text-[#FFDF01]`}>
          <ScrollLink to={item.link} smooth={true} duration={500}>
            {item.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}
