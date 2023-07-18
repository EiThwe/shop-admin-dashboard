import React from "react";
import MoreDropDown from "./MoreDropDown";
import { editDropdownData } from "../utils/data";
import BadgeComponent from "./BadgeComponent";

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
      <td className=" py-7">
        {status.toLowerCase() == "completed" && (
          <BadgeComponent
            className={"bg-green-400  text-white"}
            status={status}
          />
        )}
        {status.toLowerCase() == "delayed" && (
          <BadgeComponent
            className={"bg-blue-500 text-white"}
            status={status}
          />
        )}
        {status.toLowerCase() == "on hold" && (
          <BadgeComponent
            className={"bg-yellow-400  text-black"}
            status={status}
          />
        )}
        {status.toLowerCase() == "cancelled" && (
          <BadgeComponent
            className={"bg-red-500  text-white"}
            status={status}
          />
        )}
      </td>
      <td className=" ">
        <MoreDropDown iconSize={"text-xl"} data={editDropdownData} />
      </td>
    </tr>
  );
};

export default TableBodyRowVendorProfile;
