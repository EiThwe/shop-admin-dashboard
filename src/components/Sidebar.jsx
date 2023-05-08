import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

import Tab from "./Tab";
import { sidebarData } from "../utils/data";

const Sidebar = () => {
  return (
    <div
      className=" min-w-[250px] h-screen bg-gray-100 border-r-[1px] border-gray-400 border-opacity-40 pt-[70px]
     overflow-y-scroll customScrollbar"
    >
      {sidebarData?.map((item, index) => (
        <Tab item={item} key={index} />
      ))}
    </div>
  );
};

export default Sidebar;
