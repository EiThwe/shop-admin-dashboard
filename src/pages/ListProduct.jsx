import React, { useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import TableComponent from "../components/TableComponent";

import {
  tbodyListProductRowData,
  theadListProductData,
} from "../utils/listProductData";
import TableBodyListProductRow from "../components/TableBodyListProductRow";
import { useGetProductsQuery } from "../feature/api/productApi";

const ListProduct = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery(page);
  console.log({ data, isLoading });
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Products"}
          pageName={"products"}
          pathName={"/add-product"}
          button={"Add Product"}
          
        />
        <TableComponent
          theadData={theadListProductData}
          showing={data?.data?.length}
          entries={data?.meta?.total}
        >
          {data?.data?.map((data, index) => (
            <TableBodyListProductRow key={index} {...data} />
          ))}
        </TableComponent>
      </div>
      <Footer />
    </Layout>
  );
};

export default ListProduct;
