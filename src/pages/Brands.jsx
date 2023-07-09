import React, { useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { RxTrash } from "react-icons/rx";
import { brandsData } from "../utils/brands";
import BrandCard from "../components/BrandCard";
import AddNewBrand from "../components/AddNewBrand";

const Brands = () => {
  const [showAddBrandCard, setShowAddBrandCard] = useState(false);
  const onClickHandler = () => {
    setShowAddBrandCard(true);
  };
  return (
    <Layout>
      <div className="w-full min-h-full p-8 bg-gray-100">
        <PageHeader
          header="Brand"
          pageName="Brand"
          button="Add Brand"
          pathName={""}
          onClick={onClickHandler}
        />
        <div className="w-full  bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-4 gap-6 w-full">
            {brandsData.map((data,i) => (
              <BrandCard {...data}/>
            ))}
          </div>
        </div>
      </div>
      {showAddBrandCard && (
        <AddNewBrand setShowAddBrandCard={setShowAddBrandCard} />
      )}
      <Footer />
    </Layout>
  );
};

export default Brands;
