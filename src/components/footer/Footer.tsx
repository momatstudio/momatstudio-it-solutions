import React from "react";
import Spacer from "../spacer/Spacer";
import Nav from "../nav/Nav";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { colors } from "@/utils/styles";

export default function Footer() {
  return (
    <div className="py-10" style={{ backgroundColor: colors.blue }}>
      {/* <Spacer /> */}
      <div className="flex flex-col md:flex-row justify-between lg:px-28 px-4 mx-auto border-b border-gray-600 pb-8">
        <div className="flex justify-center md:justify-start pb-4 md:pb-0">
          <Nav
            navList={[
              { id: 1, title: "Services", link: "services" },
              { id: 2, title: "About Us", link: "about-us" },
              { id: 3, title: "Contact Us", link: "contact-us" },
              { id: 6, title: "Careers", link: "careers" },
            ]}
            color="white"
            size="sm"
          />
        </div>
        <div className="flex justify-center md:items-center gap-4 text-gray-700">
          <Nav
            navList={[
              {
                id: 0,
                title: <FaXTwitter />,
                link: "https://twitter.com/momatstudio",
              },
              {
                id: 1,
                title: <FaFacebook />,
                link: "https://www.facebook.com/momatstudio",
              },
              {
                id: 2,
                title: <FaLinkedinIn />,
                link: "https://www.linkedin.com/company/momatstudio",
              },
            ]}
            color="white"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center pt-8">
        <ul className="flex justify-center md:justify-start">
          <li className="text-white text-sm">
            Copyright © 2025 Momatstudio IT Solutions. All rights reserved.
          </li>
        </ul>
        <div className="flex justify-center md:justify-start pb-3">
          <Nav
            navList={[
              { id: 1, title: "Terms of Service", link: "terms-of-service" },
              { id: 2, title: "Privacy Policy", link: "privacy-policy" },
            ]}
            // color="gray-900"
            color="white"
            size="sm"
          />
        </div>
      </div>
      {/* <Spacer /> */}
    </div>
  );
}
