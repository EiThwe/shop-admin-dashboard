import React from "react";

const SelectBox = ({ data ,name}) => {
  return (
    <select
      name={name}
      className="px-3 w-44 py-3 rounded-2xl border border-gray-200 text-gray-400 font-bold text-sm outline-none focus:border-blue-400 appearance-none"
    >
      {data.map((item, i) => 
        <option value={item.value} key={i}>{item.option}</option>
      )}
    </select>
  );
};

export default SelectBox;
