import Image from "next/image";
import React from "react";

interface FullImageProps {
  imageUrl: string | undefined;
  alt: string | undefined;
}

export default function FullImageDisplay({ imageUrl, alt }: FullImageProps) {
  return (
    <>
      {imageUrl && alt && (
        <Image
          className="px-4 lg:px-0 rounded-2xl"
          src={imageUrl}
          alt={alt}
          width={1920}
          height={760}
        />
      )}
    </>
  );
}
