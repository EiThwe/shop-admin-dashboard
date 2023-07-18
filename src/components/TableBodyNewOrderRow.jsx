import React from "react";
import InfoDropdown from "./InfoDropdown";
import BadgeComponent from "./BadgeComponent";
import { newOrderDropdown } from "../utils/newOrdersData";

const TableBodyNewOrderRow = ({
  id,
  image,
  productName,
  name,
  email,
  product,
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
      <td className=" flex items-center py-3 px-1 ">
        <div className="w-[45px] h-[45px] rounded-xl overflow-hidden border-gray-400">
          <img src={image} alt="" />
        </div>
      </td>
      <td className=" py-3 px-1 ">
        <h6 className="text-gray-600 font-medium text-[13px]">{productName}</h6>
      </td>
      <td className=" py-3 px-1 ">
        <h6 className="text-gray-500 text-sm font-bold">{name}</h6>
        <h6 className="text-gray-400 text-[13px]">{email}</h6>
      </td>

      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{product}</h6>
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
        {status.toLowerCase() == "on the way" && (
          <BadgeComponent
            className={"bg-blue-500 text-white"}
            status={status}
          />
        )}
        {status.toLowerCase() == "redy to ship" && (
          <BadgeComponent
            className={"bg-yellow-400  text-black"}
            status={status}
          />
        )}
        {status.toLowerCase() == "pending" && (
          <BadgeComponent
            className={"bg-gray-500  text-white"}
            status={status}
          />
        )}
      </td>

      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{date}</h6>
      </td>
      <td className="py-3 px-1 ">
        <InfoDropdown data={newOrderDropdown}/>
      </td>
    </tr>
  );
};

export default TableBodyNewOrderRow;
