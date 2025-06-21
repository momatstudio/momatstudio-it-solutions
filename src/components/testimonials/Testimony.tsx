import { colors } from "@/utils/styles";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import Line from "../line/Line";

interface TestimonyProps {
  item: {
    companyName: string;
    description: string;
    ceoName: string;
    position: string;
    ratings: number;
  };
}

export default function Testimony({ item }: TestimonyProps) {
  return (
    <div className="flex flex-col text-center gap-6">
      <b>{item.companyName}</b>
      <p className="text-sm">{item.description}</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          {[...Array(5)].map((_, i) => (
            <BsStarFill
              key={i}
              color={i < item.ratings ? colors.yellow : colors.gray}
            />
          ))}
        </div>
        <p className="text-sm text-[#4a5155]">{item.ceoName}</p>
        <p className="text-sm font-semibold">{item.position}</p>
      </div>
      <div className="lg:hidden">
        <Line darkTheme={true} height={1} width={"100%"} />
      </div>
    </div>
  );
}
