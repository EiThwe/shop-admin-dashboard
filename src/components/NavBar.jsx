import React from "react";
import { GiShop } from "react-icons/gi";
import {
  IoMdSearch,
  IoMdArrowDropdown,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { CgShapeCircle } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className="w-full h-[70px] bg-gray-100 absolute top-0 flex border-b-[1px] border-gray-400 
    border-opacity-40 z-10">
      <div className="h-full min-w-[250px] border-r-[1px] border-gray-400 border-opacity-40 flex gap-2 items-center px-5">
        <GiShop className="lg:text-3xl sm:text-xl text-base  text-gray-500" />
        <h1 className="uppercase font-extrabold text-gray-800 lg:text-2xl sm:text-xl text-lg">
          shop
        </h1>
      </div>
      <div className="w-full h-full flex md:justify-between justify-end items-center md:px-5">
        <div className="justify-evenly items-center w-96 h-10 rounded-2xl bg-gray-200 overflow-hidden md:flex hidden">
          <input
            type="text"
            className="bg-gray-200 w-[85%] outline-none h-full text-sm font-semibold search"
            placeholder="search..."
          />
          <IoMdSearch className="text-gray-400 text-lg" />
        </div>
        <div className="flex">
          <button className="md:hidden border-r-[1px] border-opacity-40 sm:w-[60px] w-[40px] flex justify-center items-center">
            <IoMdSearch className="text-gray-400 sm:text-2xl text-lg " />
          </button>
          <button className="flex text-gray-400 items-center justify-center sm:w-[60px] w-[40px]">
            <ImUser className="lg:text-4xl sm:text-2xl text-lg" />
            <IoMdArrowDropdown className="lg:text-xl text-base" />
          </button>
          <button className="border-x-[1px] border-opacity-40  sm:w-[60px] w-[40px] flex justify-center items-center">
            <div className="relative">
              <IoMdNotificationsOutline className="lg:text-3xl sm:text-2xl text-lg  text-gray-400 " />
              <CgShapeCircle className="absolute -top-2 -right-1 lg:text-base text-xs text-red-500 animate-pulse" />
            </div>
          </button>
          <button className="lg:text-2xl sm:text-xl text-base text-gray-400 sm:w-[60px] w-[40px] flex justify-center items-center">
            <IoSettingsOutline className="animate-spin-slow" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
