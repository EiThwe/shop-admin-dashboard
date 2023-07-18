import React from "react";

const BadgeComponent = ({status,className}) => {
  return (
    <div className="flex items-center justify-start h-full">
      <div
        className={`px-3 py-[1px]  rounded-full text-center text-[10px] uppercase ${className}`}
      >
        {status}
      </div>
    </div>
  );
};

export default BadgeComponent;
