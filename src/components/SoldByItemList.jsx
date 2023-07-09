import React from "react";
import MoreDropDown from "./MoreDropDown";
import { HiOutlineRefresh } from "react-icons/hi";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { soldByItemsData } from "../utils/soldbyitems";

const SoldByItemList = () => {
  return (
    <div className="soldOutItem w-full border rounded-xl bg-white shadow-md">
      <div className="p-5 border-b w-full flex justify-between items-center">
        <h1 className="font-bold">Sold by Items</h1>
        <div className="flex gap-3">
          <button>
            <HiOutlineRefresh className="text-gray-500 text-lg" />
          </button>
          <MoreDropDown iconSize="text-2xl" textColor="text-gray-500" />
        </div>
      </div>
      <div className="card-body h-[534px] px-6 overflow-y-auto customScrollbar">
        <table className="table-auto w-full last:mb-2 first:mt-2">
          <tbody>
            {soldByItemsData.map(
              ({ item, quantity, percentage, status }, index) => (
                <tr
                  className="text-gray-400 text-[15px] border-b border-gray-200"
                  key={index}
                >
                  <td className="text-gray-600 font-medium py-[15px]">
                    {item}
                  </td>
                  <td className="text-center py-[15px]">{quantity}</td>
                  <td className=" flex items-center justify-end py-[15px]">
                    {percentage}{" "}
                    {status === "increase" ? (
                      <ImArrowUp className="ml-2 text-[10px]" />
                    ) : (
                      <ImArrowDown className="ml-2 text-[10px]" />
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="w-full p-5 border-t flex items-center">
        <a href="#" className="text-xs text-blue-500">
          VIEW REPORT
        </a>
      </div>
    </div>
  );
};

export default SoldByItemList;
