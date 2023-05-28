import React, { useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import VendorCard from "../components/VendorCard";
import { vendorGridData } from "../utils/data";
import AddNewVendor from "../components/AddNewVendor";

const VendorGrid = () => {
  const [showAddVendorCard, setShowAddVendorCard] = useState(false);
  const onClickHandler = () => {
    setShowAddVendorCard(true);
  };
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Vendor Card"}
          pageName={"Vendor"}
          button={"Add Vendor"}
          pathName={""}
          onClick={onClickHandler}
        />
        <div className="w-full bg-white rounded-2xl shadow-md p-8">
          <div className="grid grid-cols-3 gap-8 w-full">
            {vendorGridData.map((item, index) => (
              <div className="" key={index}>
                <VendorCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {showAddVendorCard && <AddNewVendor setShowAddVendorCard={setShowAddVendorCard}/>}
      <Footer />
    </Layout>
  );
};

export default VendorGrid;
