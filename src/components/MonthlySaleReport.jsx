import React from "react";
import SineWaveGraph from "./SineWaveGraph";
import ReportLabels from "./ReportLabels";

const MonthlySaleReport = () => {
  const data = [144, 44, 110, 5, 123,89, 12];
  const data2 = [22, 123, 45, 130, 112, 54, 181];
  const data3 = [44, 167, 102, 123, 183, 88, 134];
  return (
    <div className="w-full">
      <div className="w-full h-[280px]">
        <SineWaveGraph data={data} data2={data2} data3={data3} />
      </div>
      <ReportLabels />
    </div>
  );
};

export default MonthlySaleReport;
