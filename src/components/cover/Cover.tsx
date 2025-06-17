"use client";
import React, { useState } from "react";
import { coverSlides } from "@/utils/data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { colors } from "../../utils/styles";
import SingleCover from "@components/cover/SingleCover";

const Cover = () => {
  const [slideInfo] = useState(coverSlides);
  const [count, setCount] = useState(1);
  const [slideAutomation, setSlideAutomation] = useState(true);

  const slideAutomator = () => {
    if (slideAutomation) {
      setTimeout(() => {
        skipButtonHandler("forward", true);
      }, 5000);
    }
  };

  slideAutomator();

  console.log(count);

  const skipButtonHandler = (skipOption: string, slideAutomation: boolean) => {
    if (skipOption === "forward") {
      if (count > slideInfo.length - 1) {
        setCount(() => 1);
        return;
      }
      setCount(() => count + 1);
    }
    if (skipOption === "backward") {
      if (count === 1) {
        setCount(() => slideInfo.length);
        return;
      }
      setCount(() => count - 1);
    }
    if (slideAutomation === false) {
      setSlideAutomation(slideAutomation);
    }
  };

  const skippingDotsHandler = (index: number) => {
    setSlideAutomation(false);
    setCount(index + 1);
  };

  const filteredInfo = slideInfo.filter((item) => item.id === count);

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      {filteredInfo.map((item, index) => (
        <SingleCover key={index} item={item} />
      ))}

      {/* Forward and Backward Buttons */}
      <button
        onClick={() => skipButtonHandler("forward", false)}
        className="absolute right-0 bg-blue-900 px-2 py-10 rounded-tl-full rounded-bl-full opacity-15 hover:opacity-100 transition duration-300 ease-in-out"
      >
        <FaAngleRight color={colors.white} />
      </button>

      <button
        onClick={() => skipButtonHandler("backward", false)}
        className="absolute left-0 bg-blue-900 px-2 py-10 rounded-tr-full rounded-br-full opacity-15 hover:opacity-100 translation duration-300 easy-in-out"
      >
        <FaAngleLeft color={colors.white} />
      </button>

      {/* skipping dots button */}

      <div className="flex absolute bottom-5 ">
        {slideInfo.map((items, index) => {
          return (
            <div
              className=" bg-white h-4 w-4 rounded-full shadow-lg flex justify-center items-center mx-2 cursor-pointer"
              onClick={() => skippingDotsHandler(index)}
              key={index}
            >
              {index + 1 === count && (
                <div className="bg-blue-900 h-2.5 w-2.5 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cover;
