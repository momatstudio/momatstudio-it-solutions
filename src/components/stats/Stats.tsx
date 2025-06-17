import { stats } from "@/utils/data";
import React from "react";

export default function Stats() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 lg:w-[75%]">
        {stats.map((item, index) => (
          <div key={index}>
            <div
              className={`flex flex-col justify-center items-center h-48 border-[#D0D0D0] border-opacity-50 ${item.borderStyle}`}
            >
              <h1 className="text-center text-[35px] lg:text-6xl font-normal">
                {item.title}
              </h1>
              <span className="text-center text-sm lg:text-lg">
                {item.subTitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
