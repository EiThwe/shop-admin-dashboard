import React, { useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import UserCard from "../components/UserCard";
import { userGridInfo } from "../utils/data";

import Footer from "../components/Footer";
import AddNewUser from "../components/AddNewUser";

const UsersGrid = () => {
  const [showAddUser, setShowAddUser] = useState(false);

  const onClickHandler = () => {
    setShowAddUser(true);
  };

  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"User Card"}
          pageName={"User"}
          button={"Add New"}
          pathName={""}
          onClick={onClickHandler}
        />
        <div className="grid grid-cols-3 gap-5">
          {userGridInfo.map((data, index) => (
            <UserCard {...data} key={index} />
          ))}
        </div>
      </div>
      {showAddUser && <AddNewUser setShowAddUser={setShowAddUser}/>}
      <Footer />
    </Layout>
  );
};

export default UsersGrid;
