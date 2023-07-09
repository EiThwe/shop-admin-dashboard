import React from "react";

import TableBody from "./TableBody";
import { theadDataVendorProfile } from "../utils/data";
import TableHeadVendorProfile from "./TableHeadVendorProfile";
import TableBodyVendorProfile from "./TableBodyVendorProfile";

const TableVendorProfile = ({ textSize }) => {
  return (
    <table className=" table-fixed border-separate border-spacing-0 w-full">
      <TableHeadVendorProfile theadData={theadDataVendorProfile}  textSize={textSize} />
      <TableBodyVendorProfile />
    </table>
  );
};

export default TableVendorProfile;
