import React from "react";
import TabSubItem from "./TabSubItem";

const TabSubItems = ({ showSubItems,subItems }) => {
  return (
    <div
      className={`w-full  bg-gray-200 ${
        showSubItems ? "min-h-[10px] py-5" : "h-0"
      } transition-all
     duration-200 ease-in-out overflow-hidden`}
    >
      <TabSubItem />
  
    </div>
  );
};

export default TabSubItems;
