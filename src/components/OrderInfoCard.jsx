import React from "react";

const OrderInfoCard = ({ title, content }) => {
  return (
    <div className="w-full h-[170px] border rounded-xl overflow-hidden">
      <div className="bg-gray-100 border-b flex justify-center items-center h-[25%]">
        <h6 className=" text-gray-600 font-bold text-sm">{title}</h6>
      </div>
      <div className="flex flex-col justify-start items-start p-5 w-full h-[75%]">
        {content.map((item, i) => (
          <p className="text-gray-400 text-sm " key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default OrderInfoCard;
