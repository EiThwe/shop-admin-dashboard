import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";

const MoreDropDown = ({iconSize}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex flex-col ">
      <button
        className={`${iconSize}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <MdMoreVert />
      </button>
      <div className="relative">
        {showDropdown && (
          <ul className="bg-white border shadow-md rounded-xl w-[170px] p-3 flex flex-col gap-3 absolute text-sm top-1 right-0">
            <li>
              <a href="#" className="hover:text-blue-400">
                Action
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Another Action
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Something Else Here
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MoreDropDown;
