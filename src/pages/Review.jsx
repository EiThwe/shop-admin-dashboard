import React from "react";
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import TableComponent from "../components/TableComponent";
import Footer from "../components/Footer";

import TableBodyRowVendorList from "../components/TableBodyRowVendorList";
import { reviewTableRowData, theadReviewData } from "../utils/reviewsData";
import TableBodyRowReviews from "../components/TableBodyRowReviews";

const Review = () => {
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Review"}
          pageName={"Review"}
          pathName={""}
          onClick={""}
        />
        <TableComponent theadData={theadReviewData} showing={20} entries={48}>
          {reviewTableRowData.map((data, index) => (
            <TableBodyRowReviews key={index} {...data} />
          ))}
        </TableComponent>
      </div>
      <Footer />
    </Layout>
  );
};

export default Review;
