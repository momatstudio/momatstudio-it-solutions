import React from "react";

interface Props {
  textCenter?: boolean;
  textIsSmall?: boolean;
  title: string;
  description: string;
}

export default function TitleAndDescription({
  textCenter,
  textIsSmall,
  title,
  description,
}: Props) {
  return (
    <div className={`text-white`}>
      {textIsSmall ? (
        <h3 className={`${textCenter && "text-center lg:text-start"}`}>
          {title}
        </h3>
      ) : (
        <h2 className={`${textCenter && "text-center  lg:text-start"}`}>
          {title}
        </h2>
      )}
      <br />
      <p
        className={`${textIsSmall && "text-sm"} ${
          textCenter && "text-center  lg:text-start"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
