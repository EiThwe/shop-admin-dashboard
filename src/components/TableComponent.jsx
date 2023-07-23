import React from "react";
import TableTopTemplate from "./TableTopTemplate";
import TableUserList from "./TableUserList";
import TablePagination from "./TablePagination";
import TableHead from "./TableHead";
import TableBodyVendorList from "./TableBodyVendorList";
import TableBodyRowVendorList from "./TableBodyRowVendorList";
import { theadDataVendorList, vendorListTableRowData } from "../utils/data";
import TableHeadComponent from "./TableHeadComponent";

const TableComponent = ({ theadData,children,showing,entries,setPage,initial }) => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 text-gray-400">
      <TableTopTemplate />

      <div className="mt-5 overflow-x-auto">
        <table className="table-fixed w-full">
          <TableHeadComponent theadData={theadData} textSize={"text-[13px]"} />
          <tbody className="">{children}</tbody>
        </table>
        <TablePagination showing={showing} entries={entries} setPage={setPage} initial={initial}/>
      </div>
    </div>
  );
};

export default TableComponent;
