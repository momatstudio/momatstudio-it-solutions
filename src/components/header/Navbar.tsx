"use client";
import Image from "next/image";
import React from "react";
import logoDark from "../../../public/logo-dark.svg";
import logoLight from "../../../public/logo-light.svg";
import Nav from "../nav/Nav";
import { navList } from "@/utils/data";
import Button from "../Button/Button";
import { colors } from "@/utils/styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  scrolled: boolean;
}

export const Navbar = ({ scrolled }: Props) => {
  return (
    <div className="flex items-center justify-between py-2 h-16">
      {/* 1. logo */}
      <ScrollLink to="cover" smooth={true} duration={500}>
        <Image
          src={scrolled === false ? logoLight : logoDark}
          className="lg:w-40 cursor-pointer"
          alt="momatstudio logo"
          priority
        />
      </ScrollLink>
      {/* 2. Nav links */}
      <div className="hidden lg:flex items-center">
        <Nav
          navList={navList}
          color={scrolled === false ? "white" : "black"}
          size="sm"
        />
      </div>

      {/* 3. buttons */}
      <div className="flex items-center gap-2">
        <Button
          className="hidden lg:block"
          link="services"
          name="Our Services"
          textColor={scrolled === false ? colors.white : colors.blue}
          borderColor={!scrolled ? colors.white : colors.blue}
          hoverColor={colors.blue}
        />

        <Button
          className="hidden md:block"
          link="contact-us"
          name="Get Qoute"
          textColor={colors.blackLight}
          bgColor={scrolled ? colors.yellow : colors.white}
          borderColor={scrolled ? colors.yellow : colors.white}
          margin="15px"
          // hoverColor={colors.yellowDark}
        />

        <GiHamburgerMenu
          className="lg:hidden cursor-pointer"
          color={scrolled ? colors.black : colors.white}
          size={20}
        />
      </div>
    </div>
  );
};
