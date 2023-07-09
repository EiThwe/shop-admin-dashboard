import React from "react";
import SineWaveGraph from "./SineWaveGraph";
import ReportLabels from "./ReportLabels";

const TodaySaleReport = () => {
  const data = [100, 180, 44, 75, 150, 66, 70];
  const data2 = [144, 44, 177, 76, 23, 189, 12];
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

export default TodaySaleReport;
