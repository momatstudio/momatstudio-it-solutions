import React from "react";
import TitleAndDescription from "../title-and-Description/TitleAndDescription";
import FullImageDisplay from "../full-image-display/FullImageDisplay";
import Spacer from "../spacer/Spacer";

interface Props {
  aboutSummary: {
    title: string;
    description: string;
  };
  aboutSections: {
    textSmall: boolean;
    title: string;
    description: string;
  }[];
}
export default function TwoSectionFullDisplayExtended({
  aboutSummary,
  aboutSections,
}: Props) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-black">
      <div className="lg:pl-28 pb-28 lg:pb-0 lg:pr-6 px-4 lg:w-[50%]">
        <TitleAndDescription
          textCenter={true}
          title={aboutSummary.title}
          description={aboutSummary.description}
        />
        <Spacer />
        <div className="grid grid-cols-2 gap-4">
          {aboutSections.map((item, index) => (
            <TitleAndDescription
              key={index}
              textIsSmall={item.textSmall}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="flex lg:w-[50%] justify-between flex-row-reverse">
        <FullImageDisplay
          imageUrl="/image.png"
          alt={"sitting by the computer in a group"}
        />
      </div>
    </div>
  );
}
