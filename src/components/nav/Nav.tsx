import Link from "next/link";
import React, { JSX } from "react";

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

export default function Nav({ navList, color, size, hidden }: NavProps) {
  return (
    <ul
      className={`flex lg:justify-between md:items-center cursor-pointer gap-4 text-${color} `}
    >
      {navList.map((item, index) => (
        <li key={index} className={`text-${size} hover:text-[#FFDF01]`}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
