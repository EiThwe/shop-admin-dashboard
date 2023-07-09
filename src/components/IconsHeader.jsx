import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const IconsHeader = ({ pageName,path }) => {
  return (
    <div className="w-full flex justify-between items-baseline mb-8">
      <h1 className="text-2xl font-bold">{pageName}</h1>
      <div className="flex justify-center items-baseline gap-2 font-bold">
        <a href="#" className="text-blue-500">
          Home
        </a>
        <IoIosArrowForward className="text-[12px]" />
        <a href="#" className="text-gray-400">
          {path}
        </a>
      </div>
    </div>
  );
};

export default IconsHeader;
