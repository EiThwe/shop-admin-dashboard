import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import NumBadge from "./NumBadge";
import CategoryBadge from "./CategoryBadge";

const TableBodyRowMainCat = ({
  name,
  image,
  subCategories,
  product,
  totalSell,
  status,
  trending,
}) => {
  const count = subCategories.count;
  const categories = subCategories.categories;
  return (
    <tr className="flex text-sm border-b">
      <td className="min-h-[150px] w-[90px]  flex items-center px-1">
        <div className="w-[45px] h-[45px] rounded-xl overflow-hidden border-gray-400">
          <img src={image} alt="" />
        </div>
      </td>
      <td className="min-h-[150px] w-[90px]  px-1 flex items-center">
        <h1 className="">{name}</h1>
      </td>
      <td className="min-h-[150px] w-[100px]  px-1 flex items-start">
        <div className="flex flex-wrap w-full gap-3 my-3">
          <NumBadge count={count} />
          {categories.map((data, index) => (
            <CategoryBadge key={index} data={data}/>
          ))}
        </div>
      </td>
      <td className="min-h-[150px] w-[90px]  flex items-center px-2">{product}</td>
      <td className="min-h-[150px] w-[80px]  flex items-center px-1">{totalSell}</td>
      <td className="min-h-[150px] w-[90px]  flex items-center px-1">{status}</td>
      <td className="min-h-[150px] w-[90px]  flex items-center px-1">
        <span className={`px-[1.15em] py-[0.05em] rounded-full ${trending=="Top" && "bg-green-400"}  ${trending=="Medium" && "bg-blue-400"}  ${trending=="Low" && "bg-red-400"} tracking-wide text-[10px] uppercase text-white font-[500]`}>
          {trending}
        </span>
      </td>
      <td className="min-h-[150px] w-[85px]  flex items-center px-1">
        <div className="flex items-center w-[70px]">
          <button className="border border-green-400 rounded-l-full w-[60%] text-green-400 h-[25px] text-xs font-bold hover:bg-green-400 hover:text-white">
            Info
          </button>
          <button className="border-y border-r border-green-400 rounded-r-full w-[40%] text-green-400 h-[25px] font-bold flex justify-center items-center text-lg hover:bg-green-400 hover:text-white">
            <IoMdArrowDropdown />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableBodyRowMainCat;
