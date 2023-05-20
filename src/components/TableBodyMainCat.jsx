import React from "react";
import { mainCategoryData } from "../utils/data";
import TableBodyRowMainCat from "./TableBodyRowMainCat";
const TableBodyMainCat = () => {
  return (
    <tbody className="border">
      {mainCategoryData.map((data, index) => (
        <TableBodyRowMainCat key={index} {...data} />
      ))}
    </tbody>
  );
};

export default TableBodyMainCat;
