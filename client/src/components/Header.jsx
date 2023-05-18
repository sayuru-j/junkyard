import { useState, useEffect } from "react";

// import assets
import logo from "../assets/logo-w-text.png";
import { UserIcon, MenuIcon } from "@heroicons/react/outline";
import Layout from "./Layout";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <Layout>
      <div className="flex items-center justify-between pt-4 bg-background">
        <div id="header-left">
          <a href="/">
            <img
              className="md:w-32 w-24 hover:animate-pulse"
              src={logo}
              alt=""
            />
          </a>
        </div>

        <div className="lg:flex hidden gap-5" id="header-right">
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            HOME
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            COLLECT
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            CENTERS
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            PRODUCTS
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            FLEET
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            CONTACT
          </h1>
          <button
            className="font-semibold flex gap-1 items-center justify-center
        bg-primary hover:bg-accent text-white px-4 rounded-full"
            type="button"
          >
            <UserIcon className="w-4" />
            SIGN IN
          </button>
        </div>
        <div className="lg:hidden">
          <MenuIcon
            onClick={() => setToggle(!toggle)}
            className="w-6 cursor-pointer text-primary hover:text-accent"
          />
        </div>
        <div
          className={`${
            toggle ? "lg:hidden" : "hidden"
          } absolute top-20 right-2 z-50 shadow-sm flex flex-col bg-white max-w-xs w-full px-4 py-5 rounded-lg gap-3`}
          id="header-menu-toggle"
        >
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            HOME
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            COLLECT
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            CENTERS
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            PRODUCTS
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            FLEET
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            CONTACT
          </h1>
          <button
            className="font-semibold flex gap-1 items-center justify-center
        text-primary hover:text-accent rounded-full"
            type="button"
          >
            <UserIcon className="w-4" />
            SIGN IN
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Header;
