import React, { useState } from "react";

import {
  MapIcon,
  MailIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";
import logo from "../assets/logo.png";
import Layout from "./Layout";

const Footer = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white/50 pt-10">
      <Layout>
        <div className="hidden md:flex items-center md:justify-between justify-center text-primary">
          <div className="md:max-w-xl space-y-5">
            <h1 className="text-[50px] font-bold md:text-left text-center">
              Keep Sri Lanka, Clean and Green
            </h1>
            <h1 className="font-medium">
              Environmental service involves taking actions to reduce human
              impact on nature, including recycling, conservation, and promoting
              sustainable practices.
            </h1>
          </div>
        </div>

        <div className="md:hidden flex pt-10 items-center justify-center space-x-4 text-primary">
          <h1 className="font-medium text-sm">Email</h1>

          <input className="rounded-full py-1 px-2 text-sm" type="email" />

          <PaperAirplaneIcon className="w-5 hover:rotate-45 cursor-pointer transition-all duration-150 ease-out" />
        </div>

        <div className="flex md:w-full items-center justify-between text-primary py-10">
          <div className="md:max-w-xl flex flex-col space-y-2 items-start">
            <h1 className="font-semibold  text-xl">Our Services</h1>
            <a className="text-sm  hover:text-primary">Collecting Waste</a>
            <a className="text-sm  hover:text-primary">Recycling Waste</a>
            <a className="text-sm  hover:text-primary">Recycled Products</a>
            <a className="text-sm  hover:text-primary">Vehicle Service</a>
          </div>
          <img
            className="md:h-[100px] md:w-auto w-32 pr-10"
            src={logo}
            alt=""
          />
        </div>

        <div className="flex text-primary items-center md:justify-between justify-center py-5 bg-blackBeta">
          <div className="flex cursor-pointer">
            <h1 className="font-semibold text-sm  hover:text-primary">
              BadBytes
            </h1>
          </div>
          {toggle && (
            <div className="md:flex items-center justify-center space-x-10">
              <h1 className="font-medium  text-sm">Email</h1>

              <input className="rounded-full py-2 px-2 text-sm" type="email" />

              <PaperAirplaneIcon className="w-5  hover:rotate-45 cursor-pointer transition-all duration-150 ease-out" />
            </div>
          )}
          <div className="hidden sm:flex gap-4 px-2">
            <button
              className="bg-accent text-white font-medium  py-2 px-4 rounded-full text-sm"
              type="button"
              onClick={() => setToggle(!toggle)}
            >
              Email Us
            </button>
            <button
              className="bg-accent text-white font-medium  py-2 px-4 rounded-full text-sm"
              type="button"
            >
              Collaborate?
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
