import React from "react";
import { RxTrash } from "react-icons/rx";

const BrandCard = ({image,title,count}) => {
  return (
    <div className="w-full h-[220px] bg-white rounded-xl shadow-md border border-gray-200 flex justify-center items-center relative">
      <button className="absolute top-2 right-2 text-base text-gray-400 hover:text-red-400 active:text-red-500">
        <RxTrash />
      </button>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="brand-img w-[100px] h-[100px] rounded-xl shadow-md shadow-gray-200 overflow-hidden">
          <img
            src={image}
            alt=""
          />
        </div>
        <h6 className="title text-lg text-gray-600 font-medium">{title}</h6>
        <p className="quantity text-base text-gray-400">{count} items</p>
      </div>
    </div>
  );
};

export default BrandCard;
