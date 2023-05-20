import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const TableBodyRowUserList = ({
  name,
  image,
  email,
  phone,
  totalBuy,
  status,
  joinOn,
}) => {
  return (
    <tr className="flex text-sm border-b">
      <td className="h-[60px] w-[100px]   flex items-center px-1">
        <div className="w-[45px] h-[45px] rounded-xl overflow-hidden border-gray-400">
          <img src={image} alt="" />
        </div>
      </td>
      <td className="h-[60px] w-[135px]   px-1 flex items-center">
        <h1 className="">{name}</h1>
      </td>
      <td className="h-[60px] w-[200px]  px-1 flex items-center">
        <h1>{email}</h1>
      </td>
      <td className="h-[60px] w-[150px]   flex items-center px-1">{phone}</td>
      <td className="h-[60px] w-[120px]   flex items-center px-1">
        {totalBuy}
      </td>
      <td className="h-[60px] w-[120px]   flex items-center px-1">{status}</td>
      <td className="h-[60px] w-[120px]   flex items-center px-1">
        <h1>{joinOn}</h1>
      </td>
      <td className="h-[60px] w-[120px]  flex items-center px-1">
        <div className="flex items-center w-[80px]">
          <button className="border border-green-400 rounded-l-full w-[60%] text-green-400 h-[30px] text-sm font-bold hover:bg-green-400 hover:text-white">
            Info
          </button>
          <button className="border-y border-r border-green-400 rounded-r-full w-[40%] text-green-400 h-[30px] font-bold flex justify-center items-center text-lg hover:bg-green-400 hover:text-white">
            <IoMdArrowDropdown />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableBodyRowUserList;
