import React from "react";
import { MdOutlineGroups } from "react-icons/md";

const TabSubItem = () => {
  return (
    <div className="flex cursor-pointer group justify-between items-center w-full px-5 py-2 ">
      <div className="flex gap-2 items-center">
        <MdOutlineGroups className="text-3xl opacity-0" />
        <p className="uppercase text-sm  text-gray-400 group-hover:text-black">
          Vendors
        </p>
      </div>
    </div>
  );
};

export default TabSubItem;
