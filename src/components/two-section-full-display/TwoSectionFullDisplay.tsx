import Image from "next/image";
import React from "react";
import { FaPaintbrush } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import FullImageDisplay from "../full-image-display/FullImageDisplay";
import { colors } from "@/utils/styles";

interface Props {
  imageAtLeft: boolean;
  title: string;
  description: string;
  imageLink: string;
  imageAlt: string;
  list: { icon: string; title: string }[];
}
export default function TwoSectionFullDisplay({
  imageAtLeft,
  title,
  description,
  imageLink,
  imageAlt,
  list,
}: Props) {
  return (
    <div
      className={`flex flex-col ${
        imageAtLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`flex flex-col justify-center lg:w-[50%] rounded-full px-4 ${
          imageAtLeft ? "lg:pl-8 lg:pr-28" : "lg:pl-28 pr-6"
        } `}
      >
        <h2 className="md:pr-28 text-center md:text-start">{title}</h2>
        <br />
        <span className="text-center md:text-start">{description}</span>
        <br />
        <br />
        <ul className="">
          {list.map((item, index) => (
            <li key={index} className="flex items-center pb-4 gap-1">
              {item.icon === "MdMiscellaneousServices" ? (
                <MdMiscellaneousServices size={22} color={colors.blue} />
              ) : (
                <FaPaintbrush size={22} color={colors.blue} />
              )}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-screen lg:w-[50%] rounded-3xl">
        <FullImageDisplay imageUrl={imageLink} alt={imageAlt} />
      </div>
    </div>
  );
}
