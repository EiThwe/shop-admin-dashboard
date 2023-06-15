import React from "react";
import BarChart from "./BarChart";

const CurrentUserBarChart = () => {
  return (
    <div className="w-full border rounded-xl bg-white shadow-md h-[480px]">
      <div className="p-5 border-b">
        <h1 className="font-bold">Current Users</h1>
      </div>
      <div className=" w-full h-[350px] p-5">
        <BarChart />
      </div>
      <div className="w-full border-t">
        <div className="p-5">
        <a href="#" className="uppercase text-sm text-blue-400">In-Detail-overview</a>
        </div>
      </div>
    </div>
  );
};

export default CurrentUserBarChart;
