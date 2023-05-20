import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const TableBodyRow = ({name, image,category,product,totalSell,status,trending }) => {
  return (
    <tr className="flex text-sm border-b">
      <td className="h-[60px] w-[90px]  flex items-center px-1">
        <div className="w-[45px] h-[45px] rounded-xl overflow-hidden border-gray-400">
          <img src={image} alt="" />
        </div>
      </td>
      <td className="h-[60px] w-[90px]  px-1 flex items-center">
        <h1 className="">{category}</h1>
      </td>
      <td className="h-[60px] w-[100px]  px-1 flex items-center">
        <span className="px-[7px] py-[2px] rounded-xl bg-[#f9f9f9] tracking-wide text-xs">
          {name}
        </span>
      </td>
      <td className="h-[60px] w-[90px]  flex items-center px-1">{product}</td>
      <td className="h-[60px] w-[80px]  flex items-center px-1">{totalSell}</td>
      <td className="h-[60px] w-[90px]  flex items-center px-1">{status}</td>
      <td className="h-[60px] w-[90px]  flex items-center px-1">
        <span className={`px-[1.15em] py-[0.05em] rounded-full ${trending=="TOP" && "bg-green-400"}  ${trending=="MEDIUM" && "bg-blue-400"}  ${trending=="LOW" && "bg-red-400"} tracking-wide text-[10px] uppercase text-white font-[500]`}>
          {trending}
        </span>
      </td>
      <td className="h-[60px] w-[85px]  flex items-center px-1">
        <div className="flex items-center w-[70px]">
          <button className="border border-green-400 rounded-l-full w-[60%] text-green-400 h-[25px] text-xs font-bold hover:bg-green-400 hover:text-white">
            Info
          </button>
          <button className="border-y border-r border-green-400 rounded-r-full w-[40%] text-green-400 h-[25px] font-bold flex justify-center items-center text-lg hover:bg-green-400 hover:text-white">
            <IoMdArrowDropdown />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableBodyRow;
