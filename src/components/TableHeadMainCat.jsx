import React from "react";
import SortBtn from "./SortBtn";
import { theadMainCategoryData } from "../utils/data";

const TableHeadMainCat = () => {
  return (
    <thead className="text-gray-600 font-medium ">
      <tr className="flex border-b">
        {theadMainCategoryData.map(({ name, width }, index) => (
          <th
            className={`flex justify-between items-center h-[50px] ${width}  pl-[5px]`}
            key={index}
          >
            <h1 className="text-start text-xs">{name}</h1>
            <SortBtn />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeadMainCat;
