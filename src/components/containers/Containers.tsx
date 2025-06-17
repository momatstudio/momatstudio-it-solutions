import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import Container from "./Container";

export default function Containers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-28 px-4">
      <Container
        imageLink="/tenweb_media_r61f9jf7l.webp"
        imageAlt="Website Design and Development"
        title="Website Design and Development"
        description="Enhance your online presence with our professional website design services. We focus on creating visually appealing, user-friendly websites tailored to your brand. Get a responsive design that works on all devices."
      />
      <Container
        imageLink="/tenweb_media_rj5cpsx5t.webp"
        imageAlt="Software Installation Services"
        title="Software Installation Services"
        description="Ensure your systems are up-to-date and secure with our software installation services. We guarantee smooth setup and configuration for optimal performance. Reduce downtime with efficient installation processes."
      />
      <Container
        imageLink="/tenweb_media_rfqj8zqxu.webp"
        imageAlt="Computer Hardware Services"
        title="Computer Hardware Services"
        description="Improve hardware performance and longevity with our expert hardware services. We offer repair, maintenance, and upgrades for desktops, laptops, and servers. Get expert diagnostics and repairs."
      />
    </div>
  );
}
