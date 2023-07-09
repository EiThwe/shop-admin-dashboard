import React from "react";

const ReportLabels = () => {
  return (
    <div className="w-full py-5 ">
      <div className="w-full flex px-2 items-center gap-5">
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-[10px] rounded-full bg-[#D6E3F6]" />
          <h6 className="text-gray-600 text-sm">Via Referral</h6>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-[10px] rounded-full bg-[#FFECEF]" />
          <h6 className="text-gray-600 text-sm">Direct</h6>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-[10px] rounded-full bg-[#E8FEF2]" />
          <h6 className="text-gray-600 text-sm">Via Social</h6>
        </div>
      </div>
    </div>
  );
};

export default ReportLabels;
