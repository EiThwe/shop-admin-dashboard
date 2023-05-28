import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { dateData } from "../utils/data";

const DateDropdown = ({ iconSize }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex flex-col ">
      <button
        className="flex gap-2 items-center"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <h6 className="text-sm">Apr 26, 2023 - May 25, 2023</h6>
        <MdArrowDropDown className={`${iconSize} `} />
      </button>
      <div className="relative">
        {showDropdown && (
          <ul className="bg-white border shadow-md rounded-md w-[170px] p-5 flex flex-col gap-3 absolute text-sm top-1 right-0">
            {dateData.map((data, index) => (
              <li key={index}>
                <a href="#" className="hover:text-blue-400">
                  {data}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DateDropdown;
