import React from "react";
import Button from "../Button/Button";
import { colors } from "@/utils/styles";

interface BannerProps {
  smallTitle?: string;
  mediumTitle: string;
  description: string;
  buttonLink?: string;
  buttonName?: string;
  textColor?: string;
  id?: string;
}
const Banner: React.FC<BannerProps> = ({
  smallTitle,
  mediumTitle,
  description,
  buttonLink,
  buttonName,
  textColor,
  id,
}) => {
  return (
    <div
      id={id ? id : ""}
      className="flex flex-col md:flex-row px-4 lg:px-28"
      style={{ color: textColor }}
    >
      <div className="md:w-[50%] pb-10 lg:pb-0">
        {smallTitle && (
          <p className="py-3 text-center md:text-start">{smallTitle}</p>
        )}
        <h2 className="lg:pr-4 text-center md:text-start">{mediumTitle}</h2>
      </div>
      <div className="flex flex-col md:w-[50%]">
        <span className="lg:pb-7 mb-10 lg:mb-0 text-center md:text-start">
          {description}
        </span>
        {buttonLink && buttonName && (
          <Button
            className="self-center md:self-start"
            link={buttonLink}
            name={buttonName}
            textColor={colors.blue}
            bgColor={colors.white}
            borderColor={colors.blue}
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
