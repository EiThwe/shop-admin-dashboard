import React from "react";
import SaleReportToggleContainer from "./SaleReportToggleContainer";

const SaleReportSineWave = () => {
  const labels = ["4Jan", "5Jan", "6Jan", "7Jan", "8Jan", "9Jan", "10Jan"];
  const data = [100, 180, 44, 75, 150, 66, 70];
  const data2 = [144, 44, 177, 76, 23, 189, 12];
  const data3 = [44, 167, 102, 123, 183, 88, 134];

  return (
    <div className="w-full border rounded-xl bg-white shadow-sm">
        <div className="p-5 border-b">
        <h1 className="font-bold">Sale Report</h1>
      </div>
      <div className="px-5">
        <SaleReportToggleContainer/>
      </div>
    </div>
  );
};

export default SaleReportSineWave;
