import React from "react";
import Spacer from "../spacer/Spacer";
import { CgMail, CgPhone } from "react-icons/cg";
import { colors } from "@/utils/styles";
import { contact, generaInfo } from "@/utils/data";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="px-4 lg:px-28">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="">
          <div className="text-center lg:text-start">
            <h2 className="">{contact.title}</h2>
            <br />
            <p className="">{contact.description}</p>
          </div>
          <Spacer />
          <ul className="flex flex-col gap-5">
            <li className="flex gap-3">
              <CgMail size="30" color={colors.blue} />
              <span>{generaInfo.email}</span>
            </li>
            <li className="flex gap-3">
              <CgPhone size="30" color={colors.blue} />
              <span>{generaInfo.cellNumber}</span>
            </li>
            <li className="flex gap-3">
              <FaLocationDot size="30" color={colors.blue} />
              <span>{generaInfo.address}</span>
            </li>
          </ul>
          <Spacer />
        </div>
        <div className="">
          <form
            action="https://formsubmit.co/matthewsmohau@gmail.com"
            method="POST"
            className="flex flex-col gap-4 p-8 bg-white shadow-xl rounded-3xl"
          >
            {/* <h4>SAY SOMETHING</h4> */}
            <input
              type="text"
              placeholder="Enter full names"
              name="name"
              className="border p-3 rounded-full"
            />
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              className="border p-3 rounded-full"
            />
            <input
              type="number"
              placeholder="Enter phone number"
              name="number"
              className="border p-3 rounded-full"
            />
            <textarea
              placeholder="Type your message here"
              name="message"
              className="border p-3 rounded-3xl"
              cols={15}
              rows={4}
            />
            <input
              type="hidden"
              name="_next"
              value="https://momatstudio.co.za/thankyou"
            />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for reaching out to us. Please be petient, we will contact you as soon we receive your email. This is an automated email from Momatstudio Website."
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_cc" value="another@email.com" />
            <input type="hidden" name="_subject" value="New submission!" />
            <input
              type="submit"
              value="SEND"
              className="py-3 rounded-full cursor-pointer"
              style={{
                backgroundColor: colors.blue,
                color: colors.white,
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
