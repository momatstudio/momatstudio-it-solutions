"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  ["Services", "/#services"],
  ["About", "/#about"],
  ["Testimonials", "/#testimonials"],
  ["Blog", "/blog"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner section-shell">
        <Link className="brand" href="/" aria-label="MOMATSTUDIO IT SOLUTIONS home" onClick={() => setOpen(false)}>
          <Image src="/logo-dark.svg" alt="" width={184} height={52} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="button button-primary header-cta" href="/#contact">Request a quote</Link>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "mobile-nav-open" : ""}`} aria-label="Mobile navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="button button-primary" href="/#contact" onClick={() => setOpen(false)}>Request a quote</Link>
      </nav>
    </header>
  );
}
