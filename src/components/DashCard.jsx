import React from "react";

const DashCard = ({ quantity, description, icon }) => {
  return (
    <div className="w-full card-mini bg-white p-5 rounded-xl shadow-md border border-gray-200">
      <div className="card-body flex justify-between w-full ">
        <div className="text">
          <h2 className="text-[23px] font-medium mb-1">{quantity}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="w-[50px] h-[50px] bg-blue-400 rounded-xl text-white flex justify-center items-center">
          <span className={`${icon} text-[30px]`}></span>
        </div>
      </div>
    </div>
  );
};

export default DashCard;
