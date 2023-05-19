import { useState, useEffect } from "react";

// import assets
import logo from "../assets/logo-w-text.png";
import { UserIcon, MenuIcon } from "@heroicons/react/outline";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const LogOut = async () => {
    localStorage.removeItem("userData");

    navigate(0);
    navigate("/");
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

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

<<<<<<< HEAD
        <div className="lg:flex hidden gap-5" id="header-right">
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            HOME
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            COLLECT
          </h1>
          <a
            href={
              userData?.user?.role === "admin" ? "/ManageCenters" : "/Centers"
            }
          >
            <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
              CENTERS
            </h1>
          </a>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            PRODUCTS
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            FLEET
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            CONTACT
          </h1>
          {userData ? (
            <button
              className="font-semibold flex gap-1 items-center justify-center
=======
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
        <a href="/fleet">
        <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
          FLEET
        </h1>
        </a>
        <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
          CONTACT
        </h1>
        <button
          className="font-semibold flex gap-1 items-center justify-center
>>>>>>> origin/fleet
        bg-primary hover:bg-accent text-white px-4 rounded-full"
              type="button"
              onClick={LogOut}
            >
              <UserIcon className="w-4" />
              {userData?.user?.name}
            </button>
          ) : (
            <a href="/login">
              <button
                className="font-semibold flex gap-1 items-center justify-center
        bg-primary hover:bg-accent text-white px-4 rounded-full"
                type="button"
              >
                <UserIcon className="w-4" />
                SIGN IN
              </button>
            </a>
          )}
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
          <a
            href={
              userData?.user?.role === "admin" ? "/ManageCenters" : "/Centers"
            }
          >
            <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
              CENTERS
            </h1>
          </a>

          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            PRODUCTS
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            FLEET
          </h1>
          <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
            CONTACT
          </h1>
          {userData ? (
            <button
              className="font-semibold flex gap-1 items-center justify-center
        bg-primary hover:bg-accent text-white px-4 rounded-full"
              type="button"
              onClick={LogOut}
            >
              <UserIcon className="w-4" />
              {userData?.user?.name}
            </button>
          ) : (
            <a href="/login">
              <button
                className="font-semibold flex gap-1 items-center justify-center
        bg-primary hover:bg-accent text-white px-4 rounded-full"
                type="button"
              >
                <UserIcon className="w-4" />
                SIGN IN
              </button>
            </a>
          )}
        </div>
      </div>
<<<<<<< HEAD
    </Layout>
=======
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
        <a href="/fleet">
        <h1 className="font-semibold text-primary hover:text-accent cursor-pointer">
          FLEET
        </h1>
        </a>
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
>>>>>>> origin/fleet
  );
}

export default Header;
