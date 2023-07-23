import React from "react";
import TableVendorProfile from "./TableVendorProfile";
import Date from "./Date";
const RecentOrder = () => {
  return (
    <div className="bg-white shadow-xl border rounded-xl w-full">
      <div className="flex justify-between items-center px-6 py-4  border-b w-full">
        <h1 className="font-medium text-gray-600 text-lg">Recent Orders</h1>
         <Date />
      </div>
      <div className="w-full px-5">
        <TableVendorProfile textSize="text-sm" />
      </div>
    </div>
  );
};

export default RecentOrder;
