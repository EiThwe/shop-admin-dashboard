import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import MoreDropDown from "./MoreDropDown";
import { topProductDropdowns, topProductsData } from "../utils/topProductsData";

const TopProducts = () => {
  return (
    <div className="newCustomer w-full border rounded-xl bg-white shadow-xl">
      <div className="p-5 border-b w-full flex justify-between items-center">
        <h1 className="font-bold">Top Products</h1>
        <div className="flex gap-3">
          <button>
            <HiOutlineRefresh className="text-gray-500 text-lg" />
          </button>
          <MoreDropDown
            iconSize="text-2xl"
            textColor="text-gray-500"
            data={topProductDropdowns}
          />
        </div>
      </div>
      <div className="w-full p-6">
        {topProductsData.map(
          (
            {
              image,
              name,
              totalSales,
              description,
              discountPrice,
              normalPrice,
            },
            i
          ) => (
            <div key={i} className="flex items-start">
              <div className="pb-4 px-0">
                <div className="imgContainer w-[120px] h-[120px] rounded-md overflow-hidden">
                  <img src={image}></img>
                </div>
              </div>
              <div className="px-5 flex flex-col gap-3 justify-start">
                <h3 className="text-sm font-bold">{name}</h3>
                <p className="text-sm font-medium text-gray-500">
                  {description}
                </p>
                <div className="flex gap-3 items-center">
                  <span className="text-gray-500 ">{discountPrice}</span>
                  <span className="text-gray-400 line-through text-sm">
                    {normalPrice}
                  </span>
                </div>
              </div>
              <div className="text-gray-400 text-sm text-start">
                {totalSales}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TopProducts;
