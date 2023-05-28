import React from "react";
import MoreDropDown from "./MoreDropDown";

const TableBodyRowVendorProfile = ({
  order_id,
  product_name,
  unit,
  order_date,
  order_cost,
  status,
}) => {
  return (
    <tr className="flex text-sm border-b">
      <td className="py-8 w-[80px] flex items-center px-1">
        <h1 className="text-gray-600 font-bold">{order_id}</h1>
      </td>
      <td className="py-8 w-[250px] flex items-center px-1">
        <h1 className="text-gray-600">{product_name}</h1>
      </td>
      <td className="py-8 w-[50px] text-[15px] flex items-center px-1">
        <h1 className="text-gray-400">{unit}</h1>
      </td>
      <td className="py-8 w-[100px] text-[15px] flex items-center px-1">
        <h1 className="text-gray-400">{order_date}</h1>
      </td>
      <td className="py-8 w-[100px] text-[15px] flex items-center px-1">
        <h1 className="text-gray-400">{order_cost}</h1>
      </td>
      <td className="py-8 w-[120px] flex justify-between items-center ">
        <div className="w-[80%] flex justify-start">
          <div
            className={`px-3 py-1 rounded-full text-[10px] uppercase
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
        <MoreDropDown iconSize={"text-xl"} className="w-[20%]" />
      </td>
    </tr>
  );
};

export default TableBodyRowVendorProfile;
