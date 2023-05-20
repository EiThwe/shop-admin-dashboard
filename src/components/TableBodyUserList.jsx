import React from "react";

import { userListTableRowData } from "../utils/data";
import TableBodyRowUserList from "./TableBodyRowUserList";
const TableBodyUserList = () => {
  return (
    <tbody className="border">
      {userListTableRowData.map((data, index) => (
        < TableBodyRowUserList key={index} {...data} />
      ))}
    </tbody>
  );
};

export default TableBodyUserList;
