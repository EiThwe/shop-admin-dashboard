import React, { useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import TableTopTemplate from "../components/TableTopTemplate";
import TableUserList from "../components/TableUserList";
import TablePagination from "../components/TablePagination";
import AddNewUser from "../components/AddNewUser";
import Footer from "../components/Footer";
import TableVendorList from "../components/TableVendorList";
import AddNewVendorForm from "../components/AddNewVendorForm";

const VendorList = () => {
  const [showAddVendor, setShowAddVendor] = useState(false);

  const onClickHandler = () => {
    setShowAddVendor(true);
  };

  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Vendor List"}
          pageName={"Vendor"}
          button={"Add Vendor"}
          pathName={""}
          onClick={onClickHandler}
        />
        <div className="w-full bg-white rounded-2xl p-6 text-gray-400">
          <TableTopTemplate />

          <div className="my-5 overflow-x-auto">
            <TableVendorList />
            <TablePagination showing={20} entries={88} />
          </div>
        </div>
      </div>
      {showAddVendor && <AddNewVendorForm setShowAddVendor={setShowAddVendor} />}
      <Footer />
    </Layout>
  );
};

export default VendorList;
