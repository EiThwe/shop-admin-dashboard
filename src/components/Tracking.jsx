import React from "react";
import TrackingStep from "./TrackingStep";
import { trackingStepData } from "../utils/trackingSteps";

const Tracking = () => {
  const stage = 3;
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl text-gray-400  overflow-hidden ">
      <div className="p-4 text-center text-gray-400  ">
        <span className="uppercase text-xs">TRACKING ORDER NO - </span>
        <span className="text-sm font-medium">34VB5540K83</span>
      </div>
      <div className="flex flex-wrap justify-around bg-gray-100 py-3 px-2 text-sm">
        <div className=" py-1 px-2 text-center ">
          <span className="font-medium">Shipped Via:</span> UPS Ground
        </div>
        <div className=" py-1 px-2 text-center">
          <span className="font-medium">Status:</span> Checking Quality
        </div>
        <div className=" py-1 px-2 text-center">
          <span className="font-medium">Expected Date:</span> Jul 17, 2023
        </div>
      </div>
      <div className="w-full flex  px-4 pt-4 pb-8 justify-center">
        {trackingStepData.map((data, i) => (
          <TrackingStep key={i} {...data} isActive={i<stage} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Tracking;
