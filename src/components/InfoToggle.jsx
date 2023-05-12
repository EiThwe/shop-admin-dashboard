import React from "react";
import { infoArrowData } from "../utils/data";
import { MdPlayArrow } from "react-icons/md";

const InfoToggle = () => {
  return (
    <div className="flex flex-col gap-2 toggle">
      {infoArrowData.map((data, index) => (
        <div className="flex gap-1 items-center" key={index}>
          <MdPlayArrow className="text-xl text-gray-400" />
          <p className="text-sm font-bold text-gray-400 tracking-wide">
            {data}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoToggle;
