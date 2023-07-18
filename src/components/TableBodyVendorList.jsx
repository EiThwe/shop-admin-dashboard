import React from "react";

import { vendorListTableRowData } from "../utils/data";
import TableBodyRowVendorList from "./TableBodyRowVendorList";

const TableBodyVendorList = () => {
  return (
    <tbody className="">
      {vendorListTableRowData.map((data, index) => (
        <TableBodyRowVendorList key={index} {...data} />
      ))}
    </tbody>
  );
};

export default TableBodyVendorList;
