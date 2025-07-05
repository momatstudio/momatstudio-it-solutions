"use client";
import React from "react";

export default function Call() {
  return (
    <>
      <a href={"https://wa.me/+27726607141"}>
        <div style={{ backgroundImage: `url(./whatsapp.png)` }}></div>
      </a>

      <style jsx>{`
        div {
            position: fixed;
            display: flex
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: white;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            bottom: 0;
            right:0;
            margin-bottom: 40px;
            margin-right: 40px;
            cursor: pointer;
            z-index: 100;

        }
      `}</style>
    </>
  );
}
