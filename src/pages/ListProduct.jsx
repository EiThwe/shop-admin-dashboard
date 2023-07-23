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
import Loading from "../components/Loading";

const ListProduct = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery(page);
  console.log({ data, isLoading });
  return (
    <Layout>
      {isLoading ? (
        <div className="w-full min-h-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="w-full p-8 bg-gray-100 min-h-full">
          <PageHeader
            header={"Products"}
            pageName={"products"}
            pathName={"/add-product"}
            button={"Add Product"}
          />
          <TableComponent
            theadData={theadListProductData}
            showing={data?.meta?.skip +8}
            entries={data?.meta?.total}
            setPage={setPage}
            initial={data?.meta?.skip}
          >
            {data?.data?.map((data, index) => (
              <TableBodyListProductRow key={index} {...data} />
            ))}
          </TableComponent>{" "}
        </div>
      )}
      <Footer />
    </Layout>
  );
};

export default ListProduct;
