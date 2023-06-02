import React, { useState } from "react";
import logo from "../asset/logo.png";
import { CloseRounded, MenuRounded } from "@mui/icons-material";

function Header() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white flex justify-between items-center h-20  mx-auto px-1 md:px-8">
      <div className=" lg:pl-40 p-6 flex justify-between items-center">
        <img src={logo} alt="logo" className="h-10 inline " />{" "}
        <span className="p-4 font-Kaushan md:text-2xl text-xl font-bold text-[#49bc56]">
          Bolade Adeyemi
        </span>
      </div>
      <div className="pr-10 font-Poppins font-normal">
        <ul className="hidden md:flex lg:pr-28">
          <a href="#about">
            <li className="p-4 hover:text-[#49bc56]">ABOUT</li>
          </a>
          <a href="#whatIdo">
            <li className="p-4 hover:text-[#49bc56]">SKILLS</li>
          </a>
          <a href="#recentWorks">
            <li className="p-4 hover:text-[#49bc56]">WORK</li>
          </a>
          <a href="#contactMe">
            <li className="p-4 hover:text-[#49bc56]">CONTACT</li>
          </a>
        </ul>
      </div>
      <div onClick={handleNav} className="block md:hidden pr-4 z-[1]">
        {!nav ? <CloseRounded /> : <MenuRounded />}
      </div>
      <div
        className={
          !nav
            ? "fixed right-0 top-0 h-[70%] w-60 bg-white md:z-auto ease-in-out duration-500 font-Poppins font-normal"
            : "fixed right-[-100%]"
        }
      >
        <ul className="pt-24">
          <a href="#about">
            <li className="p-4 hover:text-[#49bc56]">ABOUT</li>
          </a>
          <a href="#whatIdo">
            <li className="p-4 hover:text-[#49bc56]">SKILLS</li>
          </a>
          <a href="#recentWorks">
            <li className="p-4 hover:text-[#49bc56]">WORK</li>
          </a>
          <a href="#contactMe">
            <li className="p-4 hover:text-[#49bc56]">CONTACT</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
