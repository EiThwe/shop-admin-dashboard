import React from "react";
import InfoDropdown from "./InfoDropdown";
import BadgeComponent from "./BadgeComponent";
import { newOrderDropdown } from "../utils/newOrdersData";

const TableBodyOrderHistoryRow = ({
  id,
  customer,

  email,
  items,
  price,
  payment,
  status,
  date,
}) => {
  return (
    <tr className="border-b">
      <td className=" py-3 px-1 ">
        <h6 className="text-gray-600 text-sm font-bold">{id}</h6>
      </td>

      <td className=" py-3 px-1 ">
        <h6 className="text-gray-600 font-medium text-[13px]">{customer}</h6>
      </td>
      <td className=" py-3 px-1 ">
        <h6 className="text-gray-400 text-[13px]">{email}</h6>
      </td>

      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{items}</h6>
      </td>
      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{price}</h6>
      </td>
      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{payment}</h6>
      </td>

      <td className="py-3">
        {status.toLowerCase() == "delivered" && (
          <BadgeComponent
            className={"bg-green-400  text-white"}
            status={status}
          />
        )}

        {status.toLowerCase() == "return" && (
          <BadgeComponent
            className={"bg-yellow-400  text-black"}
            status={status}
          />
        )}
      </td>

      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{date}</h6>
      </td>
      <td className="py-3 px-1 ">
        <InfoDropdown data={newOrderDropdown} />
      </td>
    </tr>
  );
};

export default TableBodyOrderHistoryRow;
