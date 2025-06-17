import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { colors } from "@/utils/styles";

interface Props {
  imageLink: string;
  imageAlt: string;
  title: string;
  description: string;
}
export default function Container({
  imageLink,
  imageAlt,
  title,
  description,
}: Props) {
  return (
    <div className="flex flex-col bg-[#2D2D2D] rounded-3xl overflow-hidden text-white">
      <Image src={imageLink} alt={imageAlt} width={1365} height={1024} />
      <div className="px-6 pb-5">
        <h4 className="pt-4">{title}</h4>
        <p className="pt-2 pb-8 text-sm">{description}</p>

        <Button link="websites" name="Learn More" hoverColor={colors.yellow} />
      </div>
    </div>
  );
}
