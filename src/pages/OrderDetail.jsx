import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import OrderInfoCard from "../components/OrderInfoCard";
import { orderInfoCardData } from "../utils/orderInfoCardData";
import StripedTableComponent from "../components/StripedTableComponent";
import {
  tbodyOrderDetailRowData,
  theadOrderDetailData,
} from "../utils/orderDetailData";
import TableBodyOrderDetailRow from "../components/TableBodyOrderDetailRow";
import Tracking from "../components/Tracking";

const OrderDetail = () => {
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Order Detail"}
          pageName={"Orders"}
          pathName={""}
          onClick={""}
        />
        {/* Main Container */}
        <div className="w-full bg-white rounded-2xl shadow-xl text-gray-400  overflow-hidden mb-8">
          {/* content header */}
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="text-gray-600 font-bold">Order Detail</h2>
            <p className="font-medium text-gray-500 text-[15px]">
              Order ID: #1082
            </p>
          </div>
          <div className="w-full p-5">
            {/* Info Cards */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mb-5">
              {orderInfoCardData.map((data, i) => (
                <OrderInfoCard {...data} key={i} />
              ))}
            </div>
            {/* table title */}
            <div className="w-full py-2 font-bold text-center text-gray-600 bg-gray-100">
              Product Summary
            </div>

            {/* table */}
            <StripedTableComponent theadData={theadOrderDetailData}>
              {tbodyOrderDetailRowData.map((data, index) => (
                <TableBodyOrderDetailRow key={index} {...data} />
              ))}
              <tr className="">
                <td
                  className="text-end text-gray-600 font-bold text-sm  py-3 px-1"
                  colSpan={5}
                >
                  Taxes
                </td>
                <td className="text-end text-gray-600 font-bold text-sm">
                  N/A
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td
                  className="text-end text-gray-600 font-bold text-sm  py-3 px-1"
                  colSpan={5}
                >
                  Total
                </td>
                <td className="text-end text-gray-600 font-bold text-sm">
                  $2,400.00
                </td>
              </tr>
              <tr className="">
                <td
                  className="text-end text-gray-600 font-bold text-sm  py-3 px-1"
                  colSpan={5}
                >
                  Payment Status
                </td>
                <td className="text-end text-gray-600 font-bold text-xs">
                  PAID
                </td>
              </tr>
            </StripedTableComponent>
          </div>
        </div>
        {/* Tracking */}
        <Tracking />
      </div>
      <Footer />
    </Layout>
  );
};

export default OrderDetail;
