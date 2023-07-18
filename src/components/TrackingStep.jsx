import React from "react";

const TrackingStep = ({ icon, title, isActive, index }) => {
  const isActiveColor = isActive ? "bg-[#88AAF3]" : "bg-gray-200";
  const first = (index == 0);
  const last = (index == 4);
  return (
    <div className="flex flex-col items-center">
      <div className="process-bar-wrap flex justify-center items-center">
        {!first && (
          <div className={`icon-container w-[75px] h-[4px] ${isActiveColor}`} />
        )}
        <div
          className={`step-icon ${isActiveColor} text-white flex justify-center items-center w-[75px] h-[75px] rounded-3xl`}
        >
          <i className={`${icon} text-4xl`}></i>
        </div>
        {!last && (
          <div className={`process-bar w-[75px] h-[4px] ${isActiveColor}`} />
        )}
      </div>
      <h6 className="font-medium text-sm">{title}</h6>
    </div>
  );
};

export default TrackingStep;
