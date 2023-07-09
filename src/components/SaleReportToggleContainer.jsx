import React, { useState } from "react";
import { saleReportToggleTab } from "../utils/data";
import TodaySaleReport from "./TodaySaleReport";
import MonthlySaleReport from "./MonthlySaleReport";
import YearlySaleReport from "./YearlySaleReport";

const SaleReportToggleContainer = () => {
  const [activeSlug, setActiveSlug] = useState("today's");
  return (
    <div className="w-full flex flex-col">
      <div className="flex gap-8 px-8 border-b ">
        {saleReportToggleTab.map(({ name, slug }, index) => (
          <button
            key={index}
            className={`flex gap-2 justify-center items-center text-[14px] font-bold text-gray-400 py-3 translate-y-[1px]
           ${
             activeSlug == slug && " border-b-2 border-blue-400 text-gray-500 "
           }`}
            onClick={() => setActiveSlug(slug)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className=" pt-[26px] px-5">
        {activeSlug === "today's" && <TodaySaleReport />}
        {activeSlug === "monthly" && <MonthlySaleReport />}
        {activeSlug === "yearly" && <YearlySaleReport />}
      </div>
    </div>
  );
};

export default SaleReportToggleContainer;
