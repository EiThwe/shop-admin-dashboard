import React from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import Stars from "./Stars";
import InfoDropdown from "./InfoDropdown";

const TableBodyRowReviews = ({
  image,
  name,
  profile,
  vendor,
  ratings,
  date,
}) => {
  return (
    <tr className="border-b text-sm">
      <td className=" flex items-center py-3 px-1">
        <div className="w-[45px] h-[45px] rounded-xl overflow-hidden border-gray-400">
          <img src={image} alt="" />
        </div>
      </td>
      <td className=" py-3 px-1 ">
        <h6 className="text-gray-600 font-medium">{name}</h6>
      </td>
      <td className=" py-3 px-1 ">
        <div className="w-[45px] h-[45px] rounded-xl overflow-hidden border-gray-400">
          <img src={profile} alt="" />
        </div>
      </td>
      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-sm">{vendor}</h6>
      </td>
      <td className=" py-3  text-[15px]  px-1 ">
        <Stars ratings={ratings} />
      </td>
      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-sm">{date}</h6>
      </td>
      <td className="py-3 px-1 ">
        <InfoDropdown />
      </td>
    </tr>
  );
};

export default TableBodyRowReviews;
