import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({page,setPage}) => {
    const prevHandler = ()=>{
        if(page>1){
            setPage(page-1)
        }
    }
    const nextHandler = ()=>{
        if(page<2){
            setPage(page+1)
        }
    }
  return (
    <div className="flex gap-1 justify-center items-center pt-5">
      <button className="border border-gray-800 rounded-md p-2 w-10 h-10  hover:bg-gray-800 hover:text-white" onClick={prevHandler}>
        <IoIosArrowBack />
      </button>
      <div className="border bg-gray-800 text-white flex justify-center items-center rounded-md w-[42px] h-[42px]">
       {page}
      </div>
      <button className="border border-gray-800 rounded-md p-2 w-10 h-10 hover:bg-gray-800 hover:text-white" onClick={nextHandler}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
