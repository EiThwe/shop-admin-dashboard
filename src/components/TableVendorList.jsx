import React from "react";
import TableHead from "./TableHead";
import { theadDataVendorList } from "../utils/data";
import TableBodyVendorList from "./TableBodyVendorList";

const TableVendorList = ()=> {
  return (
    <table className="w-full">
      <TableHead theadData = {theadDataVendorList} textSize={"text-[13px]"}/>
      <TableBodyVendorList/>
    </table>
  );
};

export default TableVendorList;
