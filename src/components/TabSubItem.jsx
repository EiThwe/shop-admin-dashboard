import React from "react";
import { MdDashboard } from "react-icons/md";

const TabSubItem = ({item}) => {
  return (
    <div className="flex px-5 py-2 group text-gray-500">
      <div className="flex gap-2 justify-start items-center">
        <MdDashboard className="text-2xl opacity-0 " />
        <p className="text-sm font-bold group-hover:text-black">{item}</p>
      </div>
    </div>
  );
};

export default TabSubItem;
