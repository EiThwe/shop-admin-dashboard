import React, { useState } from "react";
import { MdOutlineGroups } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import TabSubItems from "./TabSubItems";

const Tab = () => {
  const [showSubItems, setShowSubItems] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setShowSubItems(!showSubItems)}
        className="flex justify-between items-center w-full p-5 text-gray-400"
      >
        <div className="flex gap-2 items-center">
          <MdOutlineGroups className="text-3xl" />
          <p className="uppercase text-sm">Vendors</p>
        </div>
        <div>
          <IoIosArrowForward
            className={`text-base ${showSubItems ? " rotate-90" : " rotate-0"}
           transition-all duration-200 ease-in-out`}
          />
        </div>
      </button>

      <TabSubItems showSubItems={showSubItems} />
    </div>
  );
};

export default Tab;
