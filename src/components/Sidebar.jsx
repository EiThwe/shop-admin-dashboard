import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

import Tab from "./Tab";
import { sidebarData } from "../utils/data";
import { GiShop } from "react-icons/gi";

const Sidebar = ({ showSideBar }) => {
  return (
    <div className={` ${showSideBar ? "min-w-[250px] transition-all ease-in-out duration-200" : "w-0 "}`}>
      <div
        className={` ${
          showSideBar ? "min-w-[250px] transition-all ease-in-out duration-200" : "w-0 "
        } fixed top-0 h-screen bg-gray-100 border-r-[1px] border-gray-400 border-opacity-40 
      z-[100] flex flex-col`}
      >
        <div
          className={`min-h-[70px] ${
            showSideBar ? "min-w-[250px] transition-all ease-in-out duration-200" : "w-0 "
          } flex gap-2 
        items-center px-5 border-b-[1px] border-gray-400 border-opacity-40`}
        >
          <GiShop className="lg:text-3xl sm:text-xl text-base  text-blue-500" />
          <h1 className={` uppercase font-extrabold text-gray-800 lg:text-2xl sm:text-xl text-lg`}>
            shop
          </h1>
        </div>
        <div className="w-full h-full overflow-y-scroll customScrollbar">
          {sidebarData?.map((item, index) => (
            <Tab item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
