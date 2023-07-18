import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const PageHeader = ({ header, pageName, button, pathName, onClick }) => {
  return (
    <div className={`flex justify-between items-baseline`}>
      <div
        className={`flex ${
          button ? "flex-col gap-2" : "flex-row  justify-between"
        } w-full items-baseline`}
      >
        <h1 className="text-xl font-bold">{header}</h1>
        <div className="flex justify-center items-baseline gap-2 mb-[20px] font-bold text-[14px]">
          <a href="#" className="text-blue-500">
            Home
          </a>
          <IoIosArrowForward className="text-[12px]" />
          <a href="#" className="text-gray-400">
            {pageName}
          </a>
        </div>
      </div>
      {button && (
        <div>
          <Link to={pathName}>
            <button
              onClick={onClick}
              className="px-5 py-3 whitespace-nowrap bg-blue-500 hover:bg-opacity-70 active:bg-opacity-90 rounded-2xl text-white font-bold text-sm"
            >
              {button}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
