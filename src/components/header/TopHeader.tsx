"use client";
import React from "react";
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { generaInfo } from "@/utils/data";
import Nav from "../nav/Nav";
import { FaXTwitter } from "react-icons/fa6";
import Line from "../line/Line";

export const TopHeader = () => {
  return (
    <>
      <div className="hidden md:flex justify-between py-2">
        <Nav
          navList={[
            {
              id: 0,
              title: (
                <div className="flex items-center gap-1">
                  <FaPhoneAlt />
                  <span className="text-sm">{generaInfo.cellNumber}</span>
                </div>
              ),
              link: `tel:${generaInfo.cellNumber}`,
            },
            {
              id: 1,
              title: (
                <div className="flex items-center gap-1">
                  <MdOutlineEmail />
                  <span className="text-sm pl-1">{generaInfo.email}</span>
                </div>
              ),
              link: `mailto:${generaInfo.email}`,
            },
          ]}
          color={"white"}
          size="sm"
        />
        <Nav
          navList={[
            {
              id: 0,
              title: <FaFacebook />,
              link: "https://facebook.com/matthews.modika",
            },
            {
              id: 1,
              title: <FaXTwitter />,
              link: "https://x.com/matthewsmodika",
            },
            {
              id: 3,
              title: <FaLinkedin />,
              link: "https://www.linkedin.com/in/mohau-maphalle-58236722a/",
            },
          ]}
          color={"white"}
          size="sm"
          linksAreExternal={true}
        />
      </div>
      <Line darkTheme={false} height={1} width={"100%"} />
    </>
  );
};
