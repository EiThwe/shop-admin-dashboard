import React from "react";
import SineWaveGraph from "./SineWaveGraph";
import ReportLabels from "./ReportLabels";

const YearlySaleReport = () => {
  const data = [134, 80, 123, 65, 171, 33, 22];
  const data2 = [44, 144, 77, 76, 123, 89, 112];
  const data3 = [156, 23, 165, 88, 112, 54, 181];
  return (
    <div className="w-full">
      <div className="w-full h-[280px]">
        <SineWaveGraph data={data} data2={data2} data3={data3} />
      </div>
      <ReportLabels />
    </div>
  );
};

export default YearlySaleReport;
