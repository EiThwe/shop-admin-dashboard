import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { theadData } from "../utils/data";

const Table = ()=> {
  return (
    <table className=" border-separate border-spacing-0 w-full">
      <TableHead theadData = {theadData} textSize={"text-xs"}/>
      <TableBody/>
    </table>
  );
};

export default Table;
