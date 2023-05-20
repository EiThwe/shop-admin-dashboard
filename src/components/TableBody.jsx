import React from "react";
import { categoryListData } from "../utils/data";
import TableBodyRow from "./TableBodyRow";
const TableBody = () => {
  return (
    <tbody className="border">
      {categoryListData.map((data, index) => (
        <TableBodyRow key={index} {...data} />
      ))}
    </tbody>
  );
};

export default TableBody;
