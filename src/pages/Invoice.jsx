import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import StripedTableComponent from "../components/StripedTableComponent";
import TableBodyOrderDetailRow from "../components/TableBodyOrderDetailRow";
import Footer from "../components/Footer";
import {
  tbodyOrderDetailRowData,
  theadOrderDetailData,
} from "../utils/orderDetailData";
import { tbodyInvoiceRowData, theadInvoiceData } from "../utils/invoiceData";
import TableBodyInvoiceRow from "../components/TableBodyInvoiceRow";
import moment, { now } from "moment";

const Invoice = () => {
  const nowDate = moment(moment.now()).format("MMM D YYYY").toLocaleString();
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Invoice"}
          pageName={"Invoice"}
          pathName={""}
          onClick={""}
        />
        {/* Main Container */}
        <div className="w-full bg-white rounded-2xl shadow-xl text-gray-400  overflow-hidden">
          {/* content header */}
          <div className="p-8 flex justify-between items-center">
            <h2 className="text-gray-600 text-xl font-bold">Invoice #125</h2>
            <div className="btn-group w-[120px] h-7 flex text-white">
              <button className=" w-[50%] px-2 rounded-l-full h-full flex justify-start gap-1 items-center text-xs bg-blue-400  hover:bg-blue-500 active:bg-opacity-80">
                <i className="mdi mdi-content-save"></i>
                Save
              </button>
              <button className="w-[50%] h-full flex justify-end gap-1 items-center text-xs px-2 rounded-r-full bg-blue-400  hover:bg-blue-500 active:bg-opacity-80">
                <i className="mdi mdi-printer"></i>
                Print
              </button>
            </div>
          </div>
          <div className="info px-8 flex justify-between">
            <div className="flex gap-10">
            <div className="from text-sm font-bold">
                <h6 className=" text-gray-600 mb-2">From</h6>
                <h6 className="text-gray-600 mb-1">Shop</h6>
                <p className="text-gray-400 font-normal">
                  47 Elita Squre, VIP Chowk,
                </p>
                <p className=" text-gray-400 font-normal">
                  <span className="text-gray-400 font-bold">Email: </span>{" "}
                  shop@gmail.com
                </p>
                <p className=" text-gray-400 font-normal ">
                  <span className="text-gray-400 font-bold">Phone: </span> +91
                  5264 251 325
                </p>
              </div>
              <div className="to text-sm font-bold">
                <h6 className=" text-gray-600 mb-2">To</h6>
                <h6 className="text-gray-600 mb-1">John Marle</h6>
                <p className="text-gray-400 font-normal">
                  58 Jamie Ways, North Faye, Q5 5ZP
                </p>
                <p className=" text-gray-400 font-normal">
                  <span className="text-gray-400 font-bold">Email: </span>{" "}
                  John@gmail.com
                </p>
                <p className=" text-gray-400 font-normal ">
                  <span className="text-gray-400 font-bold">Phone: </span> +91
                  5264 521 943
                </p>
              </div>
             
            </div>
            <div className="details text-sm font-bold">
              <h6 className=" text-gray-600 mb-2">Details</h6>
              <p className=" text-gray-600 ">
                <span className="text-gray-400">Invoice ID: </span> #2365546
              </p>
              <p className=" text-gray-400 font-normal">
                <span className="text-gray-400 font-bold">Date: </span>{" "}{nowDate}
              </p>
              <p className=" text-gray-400 font-normal">
                <span className="text-gray-400 font-bold">VAT: </span>{" "}
                PL6541215450
              </p>
            </div>
          </div>

          <div className="w-full px-8 pt-6">
            {/* table */}
            <StripedTableComponent theadData={theadInvoiceData}>
              {tbodyInvoiceRowData.map((data, index) => (
                <TableBodyInvoiceRow key={index} {...data} />
              ))}
              <tr className="border-t border-gray-200">
                <td
                  className="text-end text-gray-600 font-bold text-sm  py-3 px-1"
                  colSpan={6}
                >
                  Subtotal
                </td>
                <td className="text-end text-gray-600 font-bold text-sm">
                  $1200.00
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td
                  className="text-end text-gray-600 font-bold text-sm  py-3 px-1"
                  colSpan={6}
                >
                  Vat(10%)
                </td>
                <td className="text-end text-gray-600 font-bold text-sm">
                  $100.00
                </td>
              </tr>
              <tr className="">
                <td
                  className="text-end text-gray-600 font-bold text-sm  py-3 px-1"
                  colSpan={6}
                >
                  Total
                </td>
                <td className="text-end text-gray-600 font-bold text-xs">
                  $1300.00
                </td>
              </tr>
            </StripedTableComponent>
            <button className="py-3 px-5 text-sm text-white bg-blue-400  hover:bg-blue-500 active:bg-opacity-80 float-right rounded-full mb-8">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Invoice;
