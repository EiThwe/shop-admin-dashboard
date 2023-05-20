import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { theadDataUserList } from "../utils/data";
import TableBodyUserList from "./TableBodyUserList";

const TableUserList = ()=> {
  return (
    <table className=" border-separate border-spacing-0 w-full">
      <TableHead theadData = {theadDataUserList} textSize={"text-[14px]"}/>
      <TableBodyUserList/>
    </table>
  );
};

export default TableUserList;
