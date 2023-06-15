import React from "react";
import DoughnutChart from "./DoughnutChart";
import { MdDownload } from "react-icons/md";

const OrderOverviewDoughnutChart = () => {
  return (
    <div className="w-full border rounded-xl bg-white shadow-md h-[480px]">
      <div className="p-5 border-b">
        <h1 className="font-bold text-center">Order Overview</h1>
      </div>
      <div className="flex flex-col justify-center items-center h-[300px]">
        <div className=" w-[250px] p-5">
          <DoughnutChart />
          
        </div>
        <button className="flex gap-2 items-center justify-center mb-5">
            <MdDownload/>
            <p className="text-sm">Download overall report</p>
          </button>
      </div>
      <div className="w-full border-t">
        <div className="grid grid-cols-2 gap-2 p-5">
        <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-transparent border-[1px] border-blue-400"></div>
            <h1 className="text-xs text-gray-600">Order Completed</h1>
         </div>
         <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-transparent border-[1px] border-purple-400"></div>
            <h1 className="text-xs text-gray-600">Order Pending</h1>
         </div>
         <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-transparent border-[1px] border-green-400"></div>
            <h1 className="text-xs text-gray-600">Order Unpaid</h1>
         </div>
         <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-transparent border-[1px] border-yellow-400"></div>
            <h1 className="text-xs text-gray-600">Order Canceled</h1>
         </div>
         <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-transparent border-[1px] border-red-400"></div>
            <h1 className="text-xs text-gray-600">Order Returned</h1>
         </div>
         <div className="flex gap-[6px] items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-transparent border-[1px] border-blue-300"></div>
            <h1 className="text-xs text-gray-600">Order Broken</h1>
         </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOverviewDoughnutChart;
