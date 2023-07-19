import React from "react";
import Date from "./Date";
import WorldMap from "./WorldMap";
import HorizontalBarChart from "./HorizontalBarChart";

const PurchasedByCountry = () => {
  const labels = ["India", "USA", "Turkey"];
  const labels1 = ["Florida", "Poland", "UK"];
  const data1 = [18, 13, 9.5];
  const data2 = [7.5, 4.6,4];
  return (
    <div className="w-full border rounded-xl bg-white shadow-md">
      <div className="p-5 border-b flex justify-between">
        <h1 className="font-bold">Purchased By Country</h1>
        <div className="relative">
          <Date />
        </div>
      </div>
      <div className=" w-full">
        <div className="w-full h-auto px-9">
          <WorldMap />
        </div>
        <div className="grid grid-cols-2 w-full border-y">
          <div className="w-full h-[180px] border-r p-2">
            <HorizontalBarChart labels={labels} data1={data1} />
          </div>
          <div className="w-full h-[180px] p-2">
            <HorizontalBarChart labels={labels1} data1={data2} />
          </div>
        </div>
        <div className="p-5 flex items-center">
          <a href="#" className=" mt-[5px] uppercase text-blue-400 text-xs">
            In-Detail-overview
          </a>
        </div>
      </div>
    </div>
  );
};

export default PurchasedByCountry;
