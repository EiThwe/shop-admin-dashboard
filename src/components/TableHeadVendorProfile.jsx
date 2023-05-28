import React from "react";

const TableHeadVendorProfile = ({theadData,textSize}) => {
  return (
    <thead className="text-gray-600 font-medium ">
      <tr className="flex border-b">
        {theadData.map(({ name, width }, index) => (
          <th
            className={`flex items-center py-3 ${width}  pl-[5px]`}
            key={index}
          >
            <h1 className={`text-start ${textSize}`}>{name}</h1>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeadVendorProfile;
