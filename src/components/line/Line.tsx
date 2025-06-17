import React from "react";

interface LineProps {
  vertical?: boolean;
  height: string | number;
  width: string | number;
  darkTheme?: boolean;
}

export default function Line({
  vertical,
  height,
  width,
  darkTheme,
}: LineProps) {
  return (
    <img
      src={darkTheme ? "/line-light.svg" : "/line.svg"}
      height={height}
      width={width}
      alt="beautiful fading line"
      className={` ${vertical ? "rotate-90" : "rotate-0"} opacity-20`}
    />
  );
}
