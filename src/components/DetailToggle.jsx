import React from "react";
import { MdPlayArrow } from "react-icons/md";
import { detailArrowData } from "../utils/data";

const DetailToggle = () => {
  return (
    <div className="toggle">
      <p className="text-sm font-bold text-gray-400 tracking-wide">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <br />
      <div className="flex flex-col gap-2">
        {detailArrowData.map((data,index)=>(
          <div className="flex gap-1 items-center" key={index}>
          <MdPlayArrow  className="text-xl text-gray-400"/>
          <p className="text-sm font-bold text-gray-400 tracking-wide">
            {data}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default DetailToggle;
