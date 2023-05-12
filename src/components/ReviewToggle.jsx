import React from "react";
import { reviewToggleData } from "../utils/data";
;
import { MdStarRate } from "react-icons/md";

const ReviewToggle = () => {
  return (
    <div className=" toggle">
      {reviewToggleData.map(({ image, name, review, text }, index) => (
        <div
          className="flex gap-3 items-center border-b-[1px] border-opacity-40 w-full py-5
         last:mb-3"
          key={index}
        >
          <div className="w-[100px] h-[100px] rounded-xl overflow-hidden">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col gap-2 tracking-wide">
            <h1 className="text-sm font-bold text-gray-600">{name}</h1>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((data) => (
                <MdStarRate
                  size={20}
                  key={data}
                  className={`${
                    data < review ? "text-yellow-400" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm font-bold text-gray-400">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewToggle;
