import React from "react";
import TabSubItem from "./TabSubItem";

const TabSubItems = ({ showSubItems, subItems,isCurrentRoute}) => {
  return (
    <div
      className={`w-full bg-gray-200 ${
        showSubItems ? "min-h-[10px] py-5" : "h-0"
      } transition-all duration-150 ease-in-out overflow-hidden`}
    >
      {subItems?.map((item, index) => (
        <TabSubItem key={index} item={item} isCurrentRoute={isCurrentRoute}/>
      ))}
    </div>
  );
};

export default TabSubItems;
