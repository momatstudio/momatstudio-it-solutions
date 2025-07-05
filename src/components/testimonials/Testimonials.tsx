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
  id?: string;
}

export default function Testimonials({ testimonies, id }: TestimoniesProps) {
  return (
    <div id={id} className="px-4 lg:px-28">
      <Spacer />
      <h1 className="text-center">TESTIMONIALS</h1>
      <Spacer />
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-9">
        {testimonies.map((item, index) => (
          <Testimony key={index} item={item} />
        ))}
      </div>
      <Spacer size={40} />
      <div className="hidden lg:block">
        <Line darkTheme={true} height={1} width={"100%"} />
      </div>
      <Spacer />
      <Stats />
    </div>
  );
}
