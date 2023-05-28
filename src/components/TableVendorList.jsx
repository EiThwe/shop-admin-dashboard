import React from "react";
import TableHead from "./TableHead";
import { theadDataVendorList } from "../utils/data";
import TableBodyVendorList from "./TableBodyVendorList";

const TableVendorList = ()=> {
  return (
    <table className=" border-separate border-spacing-0 w-full">
      <TableHead theadData = {theadDataVendorList} textSize={"text-[14px]"}/>
      <TableBodyVendorList/>
    </table>
  );
};

export default TableVendorList;
