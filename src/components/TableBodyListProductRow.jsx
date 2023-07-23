import React from "react";
import InfoDropdown from "./InfoDropdown";
import { listProductDropdown } from "../utils/listProductData";

const TableBodyListProductRow = ({
  images,
  title,
  price,
  offer,
  purchased,
  stock,
  status,
  date,
}) => {
  return (
    <tr className="border-b">
      <td className=" flex items-center py-3 px-1 ">
        <div className="w-[60px] h-[60px] rounded-xl overflow-hidden bg-[#F3F3F3] flex justify-center items-center p-1 border-gray-400">
          <img src={images[0]} alt="" />
        </div>
      </td>
      <td className=" py-3 px-1 ">
        <h6 className="text-gray-600 font-bold text-[13px]">{title}</h6>
      </td>
      <td className=" py-3 px-1 ">
        <h6 className="text-gray-500 text-sm">${price}</h6>
      </td>

      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{offer}</h6>
      </td>
      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{purchased}</h6>
      </td>
      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{stock}</h6>
      </td>

      <td className="py-3">
        <h6 className="text-gray-400 text-[12px]">{status}</h6>
      </td>

      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{date}</h6>
      </td>
      <td className="py-3 px-1 ">
        <InfoDropdown data={listProductDropdown}/>
      </td>
    </tr>
  );
};

export default TableBodyListProductRow;
