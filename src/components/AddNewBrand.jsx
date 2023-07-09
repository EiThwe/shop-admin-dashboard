import React from "react";
import CustomCheckBox from "./CustomCheckBox";
import { addVendorData } from "../utils/data";
import { addBrandData } from "../utils/addBrand";

const AddNewBrand = ({ setShowAddBrandCard }) => {
  return (
    <div
      onClick={() => setShowAddBrandCard((prev) => !prev)}
      className="fixed w-screen h-screen bg-opacity-50 bg-black top-0 left-0 z-[100] flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[420px] bg-white rounded-3xl"
      >
        <div className="w-full p-4 flex items-center">
          <input
            type="text"
            className="w-full h-11 rounded-2xl text-gray-200 border p-5 text-sm "
            placeholder="Search..."
          />
        </div>

        <div className="w-full h-[320px] border-b overflow-y-scroll customScrollbar">
          {addBrandData.map(
            ({ image, name, status, message, isChecked }, index) => (
              <div
                className="w-full bg-white flex justify-between items-center p-4 first:border-t hover:bg-[#F9F9F9]"
                key={index}
              >
                <div className="flex gap-3 items-center">
                  <div className="w-[45px] h-[45px] rounded-xl  relative">
                    <img src={image} alt="" className="rounded-xl" />
                    {status !== "unknown" && (
                      <div className="w-[13px] h-[13px] rounded-full bg-white absolute bottom-[1px] -right-[3px] p-[2px]">
                        <div
                          className={`w-full h-full rounded-full ${
                            status == "active" && " bg-green-400"
                          } ${status == "away" && " bg-yellow-400"}`}
                        ></div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col w-[250px] tracking-tight">
                    <h1 className="font-bold text-gray-600">{name}</h1>
                    <div className="truncate text-gray-400 font-medium text-[15px]">
                      {message}
                    </div>
                  </div>
                </div>
                <div className="">
                  <CustomCheckBox isChecked={isChecked} />
                </div>
              </div>
            )
          )}
        </div>
        <div className="w-full h-[80px] rounded-b-3xl flex gap-3 justify-end items-center px-3 font-bold">
          <button className="w-[80px] h-[40px] bg-gray-400 text-white rounded-full text-xs">
            Cancel
          </button>
          <button className="w-[130px] h-[40px] bg-blue-400 hover:bg-[#447db9] text-white rounded-full text-xs">
            Add New Brand
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewBrand;
