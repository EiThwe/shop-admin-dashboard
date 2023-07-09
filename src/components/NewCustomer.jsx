import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import MoreDropDown from "./MoreDropDown";
import { newCustomerData } from "../utils/newCustomerData";

const NewCustomer = () => {
  return (
    <div className="newCustomer w-full border rounded-xl bg-white shadow-md">
      <div className="p-5 border-b w-full flex justify-between items-center">
        <h1 className="font-bold">New Customers</h1>
        <div className="flex gap-3">
          <button>
            <HiOutlineRefresh className="text-gray-500 text-lg" />
          </button>
          <MoreDropDown iconSize="text-2xl" textColor="text-gray-500" />
        </div>
      </div>
      <div className="w-full px-6 py-2">
        <table className="w-full">
          <tbody className="">
            {newCustomerData.map(({ image, name, id, counts, price }, i) => (
              <tr key={i} className="">
                <td className="py-3 px-0">
                  <div className="imgContainer w-[50px] h-[50px] rounded-md overflow-hidden">
                    <img src={image}></img>
                  </div>
                </td>
                <td className="py-3">
                  <h3 className="text-sm font-bold mb-[2px]"> {name}</h3>
                  <p className="text-[13px] font-medium text-gray-500">{id}</p>
                </td>
                <td className="text-gray-400 text-sm py-3">{counts}</td>
                <td className="text-gray-500 text-sm py-3">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewCustomer;
