import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import TableComponent from "../components/TableComponent";
import Footer from "../components/Footer";
import {
  tbodyNewOrderRowdata,
  theadNewOrderData,
} from "../utils/newOrdersData";
import TableBodyRowReviews from "../components/TableBodyRowReviews";
import TableBodyNewOrderRow from "../components/TableBodyNewOrderRow";

const NewOrder = () => {
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"New Orders"}
          pageName={"Orders"}
          pathName={""}
          onClick={""}
        />
        <TableComponent theadData={theadNewOrderData} showing={20} entries={48}>
          {tbodyNewOrderRowdata.map((data, index) => (
            <TableBodyNewOrderRow key={index} {...data} />
          ))}
        </TableComponent>
      </div>
      <Footer />
    </Layout>
  );
};

export default NewOrder;
