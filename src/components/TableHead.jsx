import React from "react";
import SortBtn from "./SortBtn";
// import { theadData } from "../utils/data";

const TableHead = ({theadData,textSize}) => {
  return (
    <thead className="text-gray-600 font-medium ">
      <tr className="flex border-b">
        {theadData.map(({ name, width }, index) => (
          <th
            className={`flex justify-between items-center h-[50px] ${width}  pl-[5px]`}
            key={index}
          >
            <h1 className={`text-start text-xs ${textSize}`}>{name}</h1>
            <SortBtn />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
