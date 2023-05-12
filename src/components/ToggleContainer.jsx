import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { detailToggleData } from "../utils/data";
import DetailToggle from "./DetailToggle";
import InfoToggle from "./InfoToggle";
import ReviewToggle from "./ReviewToggle";

const ToggleContainer = () => {
  const [activeSlug, setActiveSlug] = useState("detail");
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex translate-y-[1px]">
        {detailToggleData.map(({ Icon, title, slug }, index) => (
          <button
            key={index}
            className={`flex gap-2 justify-center items-center text-[13px] font-bold text-gray-400 px-5 py-3
             ${
              activeSlug == slug &&
              "border border-gray-400 text-blue-500 border-opacity-40 bg-white border-b-white rounded-t-xl"
            }`}
            onClick={() => setActiveSlug(slug)}
          >
            <Icon />
            {title}
          </button>
        ))}
      </div>
      <div className="w-full border border-gray-400 border-opacity-40 rounded-xl bg-white p-8">
        {activeSlug === "detail" && <DetailToggle />}
        {activeSlug === "info" && <InfoToggle />}
        {activeSlug === "review" && <ReviewToggle />}
      </div>
    </div>
  );
};

export default ToggleContainer;
