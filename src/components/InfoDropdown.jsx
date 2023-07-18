import { data } from "autoprefixer";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const InfoDropdown = ({ data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className="flex items-center w-[80px]">
        <button className="border border-green-400 rounded-l-full w-[60%] text-green-400 h-[30px] text-sm font-bold hover:bg-green-400 hover:text-white">
          Info
        </button>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="border-y border-r border-green-400 active:bg-opacity-80 rounded-r-full w-[40%] text-green-400 h-[30px] font-bold flex justify-center items-center text-lg hover:bg-green-400 hover:text-white"
        >
          <IoMdArrowDropdown />
        </button>
      </div>
      {showDropdown && (
        <div className="relative">
          <ul className="bg-white border shadow-md w-[170px] py-2 flex flex-col absolute text-sm top-1 right-0">
            {data.map(({ action }, i) => (
              <li className="hover:bg-gray-100 px-3 py-1" key={i}>
                <a href="#" className="text-[13px] text-black ">
                  {action}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default InfoDropdown;
