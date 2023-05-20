import React, { useState } from "react";

const TablePagination = () => {
  return (
    <div className="flex justify-between">
      <h6>Showing 1 to 10 of 10 entries</h6>
      <div className="flex font-medium text-sm">
        <button className="border-y border-l rounded-l-lg bg-[#E9ECEF] text-gray-400 px-[10px] h-[30px]">
          Previous
        </button>
        <button className={`w-[30px] h-[30px] border-y border-r`}>1</button>
        <button className={`w-[30px] h-[30px border-y border-r`}>2</button>
        <button className={`w-[30px] h-[30px] border-y border-r`}>3</button>
        <button className={`w-[30px] h-[30px] border-y border-r`}>4</button>
        <button className="border-y border-r rounded-r-lg bg-[#E9ECEF] text-gray-400 px-[10px] h-[30px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
