import React from "react";
import { selectNumberData } from "../utils/data";

const TableTopTemplate = () => {
  return (
   
      <div className="flex justify-between items-center text-sm px-3">
        <div className="flex gap-2 items-center">
          <h6>Show</h6>
          <div className="styled-select">
            <select
              name="numbers"
              id=""
              className="border border-gray-400 border-opacity-40 rounded-xl w-[75px] h-[30px] px-2 text-xs font-medium focus:outline-gray-200 focus:outline focus:outline-[4px]"
            >
              {selectNumberData.map((data, index) => (
                <option value={data} key={index}>
                  {data}
                </option>
              ))}
            </select>
          </div>
          <h6>Entries</h6>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            className="w-[170px] h-[30px] rounded-xl border border-gray-400  border-opacity-40 bg-[#fdfdfd]"
          />
        </div>
      </div>
      
  
  );
};

export default TableTopTemplate;
