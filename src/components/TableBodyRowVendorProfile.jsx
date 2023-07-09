import React from "react";
import MoreDropDown from "./MoreDropDown";
import { editDropdownData } from "../utils/data";

const TableBodyRowVendorProfile = ({
  order_id,
  product_name,
  unit,
  order_date,
  order_cost,
  status,
}) => {
  return (
    <tr className=" border-b text-sm ">
      <td className=" py-7 px-1">
        <h1 className="text-gray-600 font-bold">{order_id}</h1>
      </td>
      <td className=" py-7 px-1">
        <h1 className="text-gray-600">{product_name}</h1>
      </td>
      <td className="py-7  text-[15px]  px-1">
        <h1 className="text-gray-400">{unit}</h1>
      </td>
      <td className=" py-7  text-[15px]  px-1">
        <h1 className="text-gray-400">{order_date}</h1>
      </td>
      <td className=" py-7  text-[15px]  px-1">
        <h1 className="text-gray-400">{order_cost}</h1>
      </td>
      <td className=" py-7   ">
        <div className="flex items-center justify-start h-full">
          <div
            className={`px-3 py-1  rounded-full text-center text-[10px] uppercase
            ${
              status.toLowerCase() == "completed" && "bg-green-400  text-white"
            }  ${
              (status.toLowerCase() == "delayed" ||
                status.toLowerCase() == "on hold") &&
              "bg-yellow-400  text-black"
            }   ${
              status.toLowerCase() == "cancelled" && "bg-red-500  text-white"
            } `}
          >
            {status}
          </div>
        </div>
      </td>
      <td className=" ">
        <MoreDropDown iconSize={"text-xl"} data={editDropdownData} />
      </td>
    </tr>
  );
};

export default TableBodyRowVendorProfile;
