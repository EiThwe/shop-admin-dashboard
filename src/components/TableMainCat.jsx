import React from "react";
import TableBody from "./TableBody";
import TableHeadMainCat from "./TableHeadMainCat";
import TableBodyMainCat from "./TableBodyMainCat";

const TableMainCat = () => {
  return (
    <table className=" border-separate border-spacing-0 w-full">
      <TableHeadMainCat />
      <TableBodyMainCat/>
    </table>
  );
};

export default TableMainCat;
