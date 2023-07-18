import React from "react";

const TableBodyOrderDetailRow = ({
  id,
  image,
  name,
  description,
  price,
  quantity,
  subTotal,
}) => {
  return (
    <tr className="last:border-b last:border-gray-300 odd:bg-gray-100 even:text-gray-600">
      <td className=" py-3 px-1 ">
        <h6 className="text-sm font-bold">{id}</h6>
      </td>

      <td className=" flex items-center py-3 px-1 ">
        <div className="w-[45px] h-[45px] rounded-xl overflow-hidden border-gray-400">
          <img src={image} alt="" />
        </div>
      </td>

      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-600 text-[13px] font-bold">{name}</h6>
        <p className="text-gray-400 text-[13px]">{description}</p>
      </td>
      <td className=" py-3  text-[15px]  px-1 ">
        <h6 className="text-gray-400 text-[13px]">{quantity}</h6>
      </td>
      <td className=" py-3  text-[15px]  px-1 text-end">
        <h6 className="text-gray-400 text-[13px]">{price}</h6>
      </td>

      <td className=" py-3  text-[15px]  px-1 text-end">
        <h6 className="text-gray-400 text-[13px]">{subTotal}</h6>
      </td>
    </tr>
  );
};

export default TableBodyOrderDetailRow;
