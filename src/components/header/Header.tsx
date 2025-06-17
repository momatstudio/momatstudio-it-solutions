"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { TopHeader } from "./TopHeader";
// import Link from "react-scroll"

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-screen z-50 px-4 lg:px-28 ${
        scrolled && "bg-white"
      } transition-all duration-300`}
    >
      {!scrolled && <TopHeader />}
      <Navbar scrolled={scrolled} />
    </div>
  );
};
