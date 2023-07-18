import React, { useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import UserCard from "../components/UserCard";
import { userGridInfo } from "../utils/data";

import Footer from "../components/Footer";
import AddNewUser from "../components/AddNewUser";
import TableTopTemplate from "../components/TableTopTemplate";
import TableUserList from "../components/TableUserList";
import TablePagination from "../components/TablePagination";

const UserList = () => {
  const [showAddUser, setShowAddUser] = useState(false);

  const onClickHandler = () => {
    setShowAddUser(true);
  };

  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"User List"}
          pageName={"User"}
          button={"Add New"}
          pathName={""}
          onClick={onClickHandler}
        />
        <div className="w-full bg-white rounded-2xl p-6 text-gray-400">
          <TableTopTemplate />

          <div className="mt-5 overflow-x-auto">
            <TableUserList />
          <TablePagination showing={20} entries={88} />
          </div>
        </div>
      </div>
      {showAddUser && <AddNewUser setShowAddUser={setShowAddUser} />}
      <Footer />
    </Layout>
  );
};

export default UserList;
