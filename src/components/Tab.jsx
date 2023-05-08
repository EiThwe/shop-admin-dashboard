import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import TabSubItems from "./TabSubItems";
import { Link, useLocation } from "react-router-dom";

const Tab = ({ item }) => {
  const location = useLocation();

  const { name,pathname,Icon, isBordered, subItems } = item;
  const [showSubItems, setShowSubItems] = useState(false);

  const isCurrentRoute = location.pathname === "/" + name.toLowerCase();
  return (
    <Link to={pathname}>
      <button
        className={`w-full flex justify-between items-center p-5 relative  ${
          isCurrentRoute ? "text-black" : "text-gray-400"
        }`}
        onClick={() => setShowSubItems(!showSubItems)}
      >
        <div className="flex gap-2 justify-start items-center">
          <Icon
            className={`text-[22px] ${
              isCurrentRoute ? "text-blue-500" : "text-gray-400"
            }`}
          />
          <p className="text-sm font-bold uppercase">{name}</p>
        </div>
        {subItems.length > 0 && (
          <div className="flex justify-center items-center">
            <IoIosArrowForward
              className={`text-xl ${showSubItems ? "rotate-90" : "rotate-0"}`}
            />
          </div>
        )}
        {isCurrentRoute && <div className="absolute w-[5px] rounded-sm bg-blue-500 h-full left-1"></div>}
      </button>
      {subItems.length>0 && <TabSubItems showSubItems={showSubItems} subItems={subItems} />}
    </Link>
  );
};

export default Tab;
