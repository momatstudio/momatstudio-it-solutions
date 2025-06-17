import React from "react";
import Spacer from "../spacer/Spacer";
import Testimony from "./Testimony";
import Line from "../line/Line";
import Stats from "../stats/Stats";

interface TestimonyProps {
  companyName: string;
  title: string;
  description: string;
  ceoName: string;
  position: string;
  ratings: number;
}

interface TestimoniesProps {
  testimonies: TestimonyProps[];
}

export default function Testimonials({ testimonies }: TestimoniesProps) {
  return (
    <div className="px-4 lg:px-28">
      <Spacer />
      <h1 className="text-center">TESTIMONIALS</h1>
      <Spacer />
      <Spacer />
      <div className="grid lg:grid-cols-3 gap-4">
        {testimonies.map((item, index) => (
          <Testimony key={index} item={item} />
        ))}
      </div>
      <Spacer />
      <Spacer />
      <Line darkTheme={true} height={1} width={"100%"} />
      <Spacer />
      <Stats />
    </div>
  );
}
