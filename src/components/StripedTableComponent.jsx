import React from "react";
import TableHeadComponent from "./TableHeadComponent";

const StripedTableComponent = ({theadData,children}) => {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="table-fixed w-full">
        <TableHeadComponent theadData={theadData} textSize={"text-[13px]"} hidden />
        <tbody className="">{children}</tbody>
      </table>
    </div>
  );
};

export default StripedTableComponent;
