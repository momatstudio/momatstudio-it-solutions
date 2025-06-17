"use client";
import { explore } from "@/utils/data";
import React, { useState } from "react";
import SingleExplore from "./SingleExplore";

const Explore = () => {
  const [exploreData] = useState(explore);

  return (
    <div className="bg-white" style={{ borderRadius: "0 0 0 150px" }}>
      <h1 className="font-extrabold text-3xl text-center pt-20">
        Explore Our Products & Services
      </h1>

      <div className="flex flex-wrap justify-center pb-32">
        {exploreData.map((item, index) => (
          <SingleExplore key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
