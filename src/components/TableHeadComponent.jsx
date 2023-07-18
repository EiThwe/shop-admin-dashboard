import React from "react";
import SortBtn from "./SortBtn";

const TableHeadComponent = ({ theadData, textSize, hidden }) => {
  return (
    <thead className="text-gray-600 font-medium">
      <tr className="">
        {theadData.map(({ name, width }, index) => (
          <th
            className={`border-b items-center py-3 ${width} pl-[5px]`}
            key={index}
          >
            <div
              className={`${!hidden && "flex justify-between items-center"}`}
              key={index}
            >
              <h1
                className={` text-xs ${textSize} ${
                  name === "SUBTOTAL" ||
                  name === "PRICE/UNIT" ||
                  name === "Quantity" ||
                  name === "Unit_Cost" ||
                  name === "Total"
                    ? "text-end"
                    : "text-start"
                }`}
              >
                {name}
              </h1>
              {!hidden && <SortBtn />}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeadComponent;
