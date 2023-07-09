import React from "react";
import { TwoLinesChart } from "./TwoLinesChart";
import Date from "./Date";

const UserActivityLineChart = () => {
  const labels = ["4Jan", "5Jan", "6Jan", "7Jan", "8Jan", "9Jan", "10Jan"];
  const data1 = [0, 65, 52, 115, 98, 165, 125];
  const data2 = [45, 38, 100, 87, 152, 187, 85];
  return (
    <div className="w-full border rounded-xl bg-white shadow-md">
      <div className="p-5 border-b flex justify-between">
        <h1 className="font-bold">User Activity</h1>
        <div className="relative">
          <Date />
        </div>
      </div>
      <div className=" w-full">
        <div className="w-full h-[295px] py-[26px] px-10">
          <TwoLinesChart labels={labels} data1={data1} data2={data2} />
        </div>
        <div className="p-5 mt-[56px] flex items-center border-t">
          <a href="#" className=" mt-[5px] uppercase text-blue-400 text-xs">
            In-Detail-overview
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserActivityLineChart;
